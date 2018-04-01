const router = require('express').Router();
const appRouter = require('./app.routes');


module.exports = router
  .use('/app', appRouter);
