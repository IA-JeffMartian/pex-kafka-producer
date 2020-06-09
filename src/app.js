'use strict';

const shield = require('@infoarmor-platform/shield').Shield;
const { router, log, app } = shield;
const pingPongRoute = require('./routes/pingPongRoute');

shield.route([router.post('/pong/', pingPongRoute.pingPong)]);

shield.on('start', () => {
  log.info('Shield server started');
});

shield.start(8443);

module.exports = app;
