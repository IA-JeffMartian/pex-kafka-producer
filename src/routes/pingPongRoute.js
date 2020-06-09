const shield = require('@infoarmor-platform/shield').Shield;
const { log } = shield;
const { Kafka } = require('kafkajs');
const kafkaInstance = new Kafka({
  clientId: 'pex-kafka-producer',
  groupId: 'pex-kafka',
  brokers: [process.env.KAFKA_BROKER]
});
//const kafkaProducer = require('../util/kafkaProducer');

const pingPong = async (req, res, next) => {
  log.info('The ping has ponged!');

  const producer = kafkaInstance.producer();

  await producer.connect();

  console.log('Connected to Kafka!');

  await producer.send({
    topic: 'ping-pong',
    messages: [{ key: 'paddle', value: 'ping' }]
  });

  // await pongPing();
  return res.send().status(202);
};

// const pongPing = async () => {
//   log.info('The pong has pinged!');
//   const consumer = kafkaInstance.consumer({ groupId: 'pex-kafka' });

//   await consumer.connect();

//   console.log('Connected to Kafka!');

//   await consumer.subscribe({ topic: 'ping-pong', fromBeginning: true });

//   log.info('Subscribed to ping-pong!');

//   await consumer.run({
//     eachMessage: async ({ topic, partition, message }) => {
//       // log.info(message);
//       log.info({
//         key: message.key.toString(),
//         value: message.value.toString()
//       });
//     }
//   });
// };

module.exports = {
  pingPong
};
