package producer

import "testing"

func TestKafkaProducer(t *testing.T) {
	InitProducer()
	InitConsumer()

	ReceiveFromKafka()
}
