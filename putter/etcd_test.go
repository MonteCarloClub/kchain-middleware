package putter

import (
	"context"
	"fmt"
	"github.com/go-playground/assert/v2"
	clientv3 "go.etcd.io/etcd/client/v3"
	"math/rand"
	"strconv"
	"sync"
	"testing"
	"time"
)

func TestEtcdKv(t *testing.T) {
	InitEtcdClient()

	PutToEtcdKv("foo", "bar")

	assert.Equal(t, "bar", GetFromEtcdKv("foo"))
}

func genFakeK() string {
	var key string
	for j := 0; j < 64; j++ {
		n := rand.Int() % 16
		key += strconv.FormatInt(int64(n), 16)
	}
	return key
}

func genFakeV() string {
	var value string
	for i := 0; i < 100; i++ {
		n := rand.Int() % 16
		value += strconv.FormatInt(int64(n), 16)
	}
	return value
}

func TestEtcdKvBatch(t *testing.T) {
	InitEtcdClient()

	// sendCost=\Sigma(t2-t2); writeCost=t3-t0
	var sendCost, writeCost, t0, t1, t2, t3 int64
	var wg sync.WaitGroup
	wg.Add(1)

	go func() {
		for {
			response, _ := EtcdClientKv.Get(context.TODO(), "", clientv3.WithFromKey())
			if len(response.Kvs) >= 3000 {
				t3 = time.Now().UnixNano()
				writeCost = t3 - t0
				wg.Done()
				return
			}
		}
	}()

	keys := make([]string, 0)
	t0 = time.Now().UnixNano()
	for i := 0; i < 3000; i++ {
		key := genFakeK()
		value := genFakeV()
		t1 = time.Now().UnixNano()
		go PutToEtcdKv(key, value)
		t2 = time.Now().UnixNano()
		sendCost += t2 - t1
		keys = append(keys, key)
	}

	wg.Wait()

	fmt.Printf("send 3000 txs in %v ms, write in %v ms\n", sendCost/1000000, writeCost/1000000)
	fmt.Println("deleting testing kvs... please wait")

	for _, key := range keys {
		DeleteFromEtcdKv(key)
	}
}
