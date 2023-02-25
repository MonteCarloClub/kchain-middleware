package putter

import (
	"context"
	"github.com/MonteCarloClub/log"
	clientv3 "go.etcd.io/etcd/client/v3"
	"time"
)

var (
	EtcdClientKv clientv3.KV
)

func InitEtcdClient() {
	client, err := clientv3.New(clientv3.Config{
		Endpoints:   []string{"localhost:2379"},
		DialTimeout: 5 * time.Second,
	})
	if err != nil {
		log.Error("fail to init etcd client", "err", err)
		return
	}
	EtcdClientKv = clientv3.NewKV(client)
	log.Info("etcd client inited")
}

func PutToEtcdKv(key string, value string) {
	_, err := EtcdClientKv.Put(context.TODO(), key, value)
	if err != nil {
		log.Error("fail to put kv to etcd", "key", key, "value", value, "err", err)
	}
}

func GetFromEtcdKv(key string) string {
	response, err := EtcdClientKv.Get(context.TODO(), key)
	if err != nil {
		log.Error("fail to get kv from etcd", "key", key)
		return ""
	}
	if len(response.Kvs) < 1 || len(response.Kvs) > 1 {
		log.Error("illegal kv from etcd", "key", key)
		return ""
	}
	value := string(response.Kvs[0].Value)
	log.Info("kv from etcd got", "key", key, "value", value)
	return value
}

func DeleteFromEtcdKv(key string) {
	_, _ = EtcdClientKv.Delete(context.TODO(), key)
}
