const mailer = require('../../controllers/mailer');

const router = require('express').Router();

module.exports = router
  .post('/send_message', mailer.send);
