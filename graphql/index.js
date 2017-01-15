const models = require('../models');
const {makeExecutableSchema} = require('graphql-tools');

module.exports = makeExecutableSchema({
  typeDefs: `
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
      posts: [Post]
    }
    
    type Post {
      id: Int!
      title: String!
      body: String!
      createdAt: String
      updatedAt: String
    }
    
    schema {
      query: Query
    }
  `,
  resolvers: {
    Query: {
      hello() {
        return 'Hello world!';
      },
      users(query, args) {
        if (args.id) {
          return models.User.findAll({
            where: {
              id: args.id
            }
          });
        } else {
          return models.User.findAll();
        }
      }
    },
    User: {
      posts: (user) => {
        return user.getPosts();
      }
    }
  }
});
