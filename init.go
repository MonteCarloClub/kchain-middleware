package main

import (
	"github.com/MonteCarloClub/kchain-middleware/producer"
	"github.com/MonteCarloClub/kchain-middleware/putter"
)

func init() {
	producer.InitProducer()
	putter.InitEtcdClient()
}
