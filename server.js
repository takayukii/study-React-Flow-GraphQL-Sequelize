require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
const uuid = require('node-uuid');
const ejs = require('ejs');
const app = express();

require('./config/auth');

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

app.use(express.static('build'));
app.use('/login', bodyParser.urlencoded({ extended: true }));
app.use('/', require('./routes'));

app.listen(3000, () => {
  console.log('Listening on 3000');
});
