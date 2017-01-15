// @flow

require('dotenv').config();

import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import session from 'express-session';
import flash from 'connect-flash';
import uuid from 'node-uuid';
import ejs from 'ejs';
import routes from './routes';

const app = express();

// Test Flow
var str: number = 'hello world!';
console.log(str);

require('./auth');

app.use(session({
  genid: function(req) {
    const id = uuid.v4();
    console.log('genid = ' + id);
    return id;
  },
  secret: process.env.SECRET
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.engine('ejs', ejs.renderFile);
app.set('views', path.join(__dirname, './views'));

app.use(express.static('./build/client'));
app.use('/login', bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

app.listen(3000, () => {
  console.log('Listening on 3000');
});
