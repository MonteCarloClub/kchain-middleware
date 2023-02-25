package handler

import (
	"context"
	"fmt"
	"github.com/MonteCarloClub/kchain-middleware/putter"
	"github.com/MonteCarloClub/log"
	"github.com/gin-gonic/gin"
	clientv3 "go.etcd.io/etcd/client/v3"
	"math/rand"
	"net/http"
	"strconv"
	"sync"
	"time"
)

type TpsReq struct {
	BatchSize   string `json:"batch_size"`
	KeyLength   string `json:"key_length"`
	ValueLength string `json:"value_length"`
}

func genFakeK(kLen int) string {
	var key string
	for j := 0; j < kLen; j++ {
		n := rand.Int() % 16
		key += strconv.FormatInt(int64(n), 16)
	}
	return key
}

func genFakeV(vLen int) string {
	var value string
	for i := 0; i < vLen; i++ {
		n := rand.Int() % 16
		value += strconv.FormatInt(int64(n), 16)
	}
	return value
}

func HandleTps(c *gin.Context) {
	// 1. 解析请求
	var tpsReq TpsReq
	if err := c.BindJSON(&tpsReq); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{})
		log.Error("/test_tps: bad request", "err", err)
		return
	}
	batchSize, err := strconv.Atoi(tpsReq.BatchSize)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{})
		log.Error("/test_tps: illegal batch_size", "err", err)
		return
	}
	keyLength, err := strconv.Atoi(tpsReq.KeyLength)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{})
		log.Error("/test_tps: illegal key_length", "err", err)
		return
	}
	valueLength, err := strconv.Atoi(tpsReq.KeyLength)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{})
		log.Error("/test_tps: illegal value_length", "err", err)
		return
	}

	// 2. 测试
	// sendCost=\Sigma(t2-t2); writeCost=t3-t0
	var sendCost, writeCost, t0, t1, t2, t3 int64
	var wg sync.WaitGroup
	wg.Add(1)

	go func() {
		for {
			response, _ := putter.EtcdClientKv.Get(context.TODO(), "", clientv3.WithFromKey())
			if len(response.Kvs) >= batchSize {
				t3 = time.Now().UnixNano()
				writeCost = t3 - t0
				wg.Done()
				return
			}
		}
	}()

	keys := make([]string, 0)
	t0 = time.Now().UnixNano()
	for i := 0; i < batchSize; i++ {
		key := genFakeK(keyLength)
		value := genFakeV(valueLength)
		t1 = time.Now().UnixNano()
		go putter.PutToEtcdKv(key, value)
		t2 = time.Now().UnixNano()
		sendCost += t2 - t1
		keys = append(keys, key)
	}

	wg.Wait()

	fmt.Printf("send %v txs in %v ms, write in %v ms\n", batchSize, sendCost/1000000, writeCost/1000000)
	fmt.Println("deleting testing kvs... please wait")

	for _, key := range keys {
		putter.DeleteFromEtcdKv(key)
	}

	tps := int64(float64(batchSize) / float64(writeCost) * 1000000000)
	c.JSON(http.StatusOK, gin.H{
		"tps": tps,
	})
}
