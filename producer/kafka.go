package producer

import (
	"fmt"
	"github.com/MonteCarloClub/log"
	"github.com/Shopify/sarama"
	"sync"
)

const (
	KafkaTopic = "kchain"
)

var (
	KafkaProducer sarama.SyncProducer
	KafkaConsumer sarama.Consumer
)

func InitProducer() {
	config := sarama.NewConfig()
	config.Producer.Return.Successes = true

	syncProducer, err := sarama.NewSyncProducer([]string{"106.14.244.78:9092"}, config)
	if err != nil {
		log.Error("fail to init kafka producer", "err", err)
		return
	}
	KafkaProducer = syncProducer
	log.Info("kafka producer inited")
}

func InitConsumer() {
	consumer, err := sarama.NewConsumer([]string{"106.14.244.78:9092"}, nil)
	if err != nil {
		log.Error("fail to init kafka consumer", "err", err)
		return
	}
	KafkaConsumer = consumer
	log.Info("kafka consumer inited")
}

func SendToKafka(message string) {
	producerMessage := &sarama.ProducerMessage{}
	producerMessage.Topic = KafkaTopic
	producerMessage.Value = sarama.StringEncoder(message)

	partition, offset, err := KafkaProducer.SendMessage(producerMessage)
	if err != nil {
		log.Error("fail to send message to kafka", "message", message, "err", err)
		return
	}
	log.Info("message sent", "message", message, "partition", partition, "offset", offset)
}

func ReceiveFromKafka() {
	partitions, err := KafkaConsumer.Partitions(KafkaTopic)
	if err != nil {
		log.Error("fail to get kafka partitions", "err", err)
		return
	}
	log.Info("kafka partitions got", "partitions", partitions)

	var wg sync.WaitGroup
	for partition := range partitions {
		// OffsetNewest: 即时消费, OffsetOldest: 从积压的开始
		partitionConsumer, err := KafkaConsumer.ConsumePartition(KafkaTopic, int32(partition), sarama.OffsetOldest)
		if err != nil {
			log.Error("fail to create partition consumer", "err", err)
			return
		}
		log.Info("kafka partition consumer created", "partition", partition)
		defer partitionConsumer.AsyncClose()

		wg.Add(1)
		go func(sarama.PartitionConsumer) {
			defer wg.Done()
			for msg := range partitionConsumer.Messages() {
				// todo: 实际业务发起，写入channel即可
				fmt.Printf("partition: %v, offset: %v, key:%v, value:%v\n", msg.Partition, msg.Offset, string(msg.Key), string(msg.Value))
			}
		}(partitionConsumer)
	}
	wg.Wait()
}
