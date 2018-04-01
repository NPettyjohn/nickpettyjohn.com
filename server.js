const express = require('express');
const parser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const port = process.env.PORT || 8000;

const app = express();


app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.use(express.static(path.resolve('dist')));

const sessionConfig = {
  saveUninitialized: true,
  secret: 'mySessionSecret',
  resave: false,
  name: 'session',
  rolling: true,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 36000,
  }
};

app.use(cookieParser('alkdjfoioig;qnoqinq;rg546a54d'));
app.use(session(sessionConfig));

//

// require('./server/config/database');

app.use('/api', require('./server/config/routes'));

app.use(require('./server/config/catch-all'));

app.listen(port, () => console.log(`express listening on port ${port}`));
