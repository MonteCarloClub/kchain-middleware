package main

import (
	"github.com/MonteCarloClub/kchain-middleware/handler"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	/**
	部署 ./fe 目录下的前端静态资源
	*/
	r.Static("/", "./fe")
	/** POST /depository example:
	{
		"from": "77777778c7577dc7629e48dd0590cc48be0314b4",
		"to": "77777778c7577dc7629e48dd0590cc48be0314b4",
		"nonce": "37",
		"data": "hello",
		"pubkey": "0",
		"signature": "hello",
		"crypto_method": "sm"
	}
	*/
	r.POST("/depository", handler.HandleDepository)
	/** POST /query example:
	{
		"tx_hash": "0xf7ad14cb666b9896154bbf71a0867087346d034ceb6104c9a1f814a45e772d73"
	}
	*/
	r.POST("/query", handler.HandleQuery)
	/** POST /test_tps example:
	{
		"batch_size": "3000",
		"key_length": "66",
		"value_length": "100"
	}
	*/
	r.POST("/test_tps", handler.HandleTps)
	_ = r.Run(":8888")
}
