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
      hello(obj, args, context) {
        logResolver(obj, args, context);
        return 'Hello world!';
      },
      users(obj, args, context) {
        logResolver(obj, args, context);
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
      posts: (user, args, context) => {
        logResolver(user, args, context);
        if (context.user) {
          return user.getPosts();
        }
        throw new Error('Not authorized'); // appear in errors and posts is null
      }
    }
  }
});

function logResolver(obj, args, context) {
  const user = context.user ? context.user.name : null;
  console.log(obj, args, user);
}
