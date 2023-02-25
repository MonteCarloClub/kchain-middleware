package handler

import (
	"encoding/hex"
	"encoding/json"
	"github.com/MonteCarloClub/kchain-middleware/producer"
	"github.com/MonteCarloClub/kchain-middleware/putter"
	"github.com/MonteCarloClub/log"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/sha3"
	"net/http"
)

type DepositoryReq struct {
	From         string `json:"from"`
	To           string `json:"to"`
	Nonce        string `json:"nonce"`
	Data         []byte `json:"data"`
	PubKey       []byte `json:"pubkey"` /** by Huang */
	Signature    []byte `json:"signature"`
	CryptoMethod string `json:"crypto_method"`
}

type TxMetadata struct {
	From  string `json:"from"`
	Nonce string `json:"nonce"`
}

type DepositoryValue struct {
	Height       string `json:"height"` // 当且仅当交易已确认
	TxHash       string `json:"tx_hash"`
	From         string `json:"from"`
	To           string `json:"to"`
	Nonce        string `json:"nonce"`
	Data         []byte `json:"data"`
	PubKey       []byte `json:"pubkey"` /** by Huang */
	Signature    []byte `json:"signature"`
	CryptoMethod string `json:"crypto_method"`
	Status       string `json:"status"` // 交易状态：0表示挂起，1表示已确认
}

func (depositoryValue *DepositoryValue) isLegal() bool {
	if depositoryValue == nil {
		return false
	}
	txMetadata := depositoryValue.From + depositoryValue.Nonce
	if len(txMetadata)%2 == 1 {
		txMetadata = "0" + txMetadata
	}
	var txHash string
	hash := sha3.NewLegacyKeccak256()
	txMetadataHex, err := hex.DecodeString(txMetadata)
	if err != nil {
		return false
	}
	hash.Write(txMetadataHex)
	buf := hash.Sum(nil)
	txHash = "0x" + hex.EncodeToString(buf)
	return depositoryValue.TxHash == txHash
	// todo: 验证签名
}

func write(txHash string, depositoryReqJson string) {
	putter.PutToEtcdKv(txHash, depositoryReqJson)
	log.Info("/depository: transaction written", "key", txHash, "value", depositoryReqJson)
}

func broadcast(txHash string) {
	producer.SendToKafka(txHash)
	log.Info("transaction broadcast", "hash", txHash)
}

func HandleDepository(c *gin.Context) {
	// 1. 解析请求
	var depositoryReq DepositoryReq
	if err := c.BindJSON(&depositoryReq); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{})
		log.Error("/depository: bad request", "err", err)
		return
	}

	// 2. 验证签名方法
	if depositoryReq.CryptoMethod != "sm" && depositoryReq.CryptoMethod != "default" {
		c.JSON(http.StatusBadRequest, gin.H{})
		log.Error("/depository: illegal crypto method", "from", depositoryReq.From, "nonce", depositoryReq.Nonce)
		return
	}
	log.Info("/depository: crypto method verified", "from", depositoryReq.From, "nonce", depositoryReq.Nonce)

	// 3. 提取用于编码的交易体摘要
	var txMetadata string
	txMetadataEntity := &TxMetadata{
		From:  depositoryReq.From,
		Nonce: depositoryReq.Nonce,
	}
	// 地址不包含0x前缀
	txMetadata = txMetadataEntity.From + txMetadataEntity.Nonce
	if len(txMetadata)%2 == 1 {
		txMetadata = "0" + txMetadata
	}
	log.Info("/depository: transaction metadata marshaled", "from", depositoryReq.From, "nonce", depositoryReq.Nonce)

	// 4. 计算交易哈希
	var txHash string
	hash := sha3.NewLegacyKeccak256()
	txMetadataHex, err := hex.DecodeString(txMetadata)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{})
		log.Error("/depository: fail to convert transaction metadata to hex", "from", depositoryReq.From, "nonce", depositoryReq.Nonce, "err", err)
		return
	}
	hash.Write(txMetadataHex)
	buf := hash.Sum(nil)
	txHash = "0x" + hex.EncodeToString(buf)

	// 5. 将数据写入
	depositoryValue := &DepositoryValue{
		Height:       "-1",
		TxHash:       txHash,
		From:         depositoryReq.From,
		To:           depositoryReq.To,
		Nonce:        depositoryReq.Nonce,
		Data:         depositoryReq.Data,
		PubKey:       depositoryReq.PubKey,
		Signature:    depositoryReq.Signature,
		CryptoMethod: depositoryReq.CryptoMethod,
		Status:       "0",
	}
	depositoryValueJson, err := json.Marshal(depositoryValue)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{})
		log.Error("/depository: fail to marshal depository value", "from", depositoryReq.From, "nonce", depositoryReq.Nonce, "err", err)
		return
	}
	go write(txHash, string(depositoryValueJson))

	// 6. 在节点之间做广播
	go broadcast(txHash)

	c.JSON(http.StatusOK, gin.H{
		"tx_hash": txHash,
	})
	log.Info("/depository: transaction hash got", "from", depositoryReq.From, "nonce", depositoryReq.Nonce, "hash", txHash)
}
