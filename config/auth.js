// https://dev-blog.apollodata.com/a-guide-to-authentication-in-graphql-e002a4039d1#.r0bghb7ox

const passport = require('passport');
const bcrypt = require('bcrypt');
const models = require('../models');

const LocalStrategy = require('passport-local').Strategy;

passport.use('local', new LocalStrategy(
  {
    usernameField: 'email'
  },
  (email, password, done) => {
    models.User.findOne({
        where: {
          email: email,
          password: bcrypt.hashSync(password, process.env.SALT)
        }
      })
      .then((user) => {
        console.log('User.findOne', user);
        if(user){
          return Promise.resolve(user);
        } else {
          return Promise.reject('invalid username or password');
        }
      })
      .then((user) => {
        return done(null, user);
      })
      .catch((err) => {
        console.log(err);
        return done(err);
      });
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  models.User.findOne({where:{id: id}}).then((user, err) => {
    return done(err, user);
  });
});
