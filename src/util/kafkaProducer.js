const { Kafka } = require('kafkajs');
const kafkaInstance = new Kafka({
  clientId: 'pex-kafka-producer',
  brokers: ['localhost:9092']
});

const producer = async () => {
  const producer = kafkaInstance.producer();
  await producer.connect();

  return producer;
};

module.exports = {
  producer
};
