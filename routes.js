const express = require('express');
const passport = require('passport');

const graphqlHTTP = require('express-graphql');
const schema = require('./graphql');

const router = express.Router();

const isAuthenticated = (req, res, next) => {
  console.log('isAuthenticated', req.isAuthenticated());
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}));

// router.post('/graphql', isAuthenticated, graphqlHTTP({
router.post('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

router.get('/test', isAuthenticated, (req, res) => {
  console.log('Check sessionId', req.sessionID);
  res.send('Hello');
});

router.get('/login', (req, res) => {
  res.render('login.ejs');
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

module.exports = router;
