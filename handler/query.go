package handler

import (
	"encoding/json"
	"github.com/MonteCarloClub/kchain-middleware/putter"
	"github.com/MonteCarloClub/log"
	"github.com/gin-gonic/gin"
	"net/http"
)

type QueryReq struct {
	TxHash string `json:"tx_hash"`
}

func HandleQuery(c *gin.Context) {
	// 1. 解析请求
	var queryReq QueryReq
	if err := c.BindJSON(&queryReq); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{})
		log.Error("/query: bad request", "err", err)
		return
	}

	// 2. 查询
	txJson := putter.GetFromEtcdKv(queryReq.TxHash)
	var depositoryValue DepositoryValue
	err := json.Unmarshal([]byte(txJson), &depositoryValue)
	if err != nil {
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"tx": depositoryValue,
	})
}
