const db = require('../models');
const { graphql, buildSchema } = require('graphql');

module.exports = {
  schema: buildSchema(`
  type Query {
    hello: String
    users(id: Int): [User]
  }
  
  type User {
    id: Int!
    name: String!
    bio: String
    createdAt: String
    updatedAt: String
  }
`),
  rootValue: {
    hello: () => {
      return 'Hello world!';
    },
    users: ({id}) => {
      console.log('id =', id);
      if (id) {
        return db.User.findAll({where: {id: id}});
      } else {
        return db.User.findAll();
      }
    }
  },
  graphiql: true
};
