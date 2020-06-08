const shield = require('@infoarmor-platform/shield').Shield;
const { log } = shield;
const kafkaProducer = require('../util/kafkaProducer').producer();

const pingPong = async (req, res, next) => {
  log.info('The ping has ponged!');
  await kafkaProducer.send({
    topic: 'ping-pong',
    messages: [{ key: 'paddle', value: 'ping' }]
  });
  return res.send().status(202);
};

module.exports = {
  pingPong
};
