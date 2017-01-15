const models = require('../models');
const {makeExecutableSchema} = require('graphql-tools');

module.exports = makeExecutableSchema({
  typeDefs: `    
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
    
    input PostInput {
      title : String!
      body : String!
    }
    
    type Query {
      hello: String
      users(id: Int): [User]
    }
    
    type Mutation {
      createPost(post: PostInput): Post
    }
    
    schema {
      query: Query
      mutation: Mutation
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
    Mutation: {
      createPost (obj, args, context) {
        logResolver(obj, args, context);
        models.Post.create(args.post)
          .then((post) => {
            console.log(post);
            if (context.user) {
              post.setUser(context.user);
            }
          })
          .catch((err) => {
            console.log(err);
          });
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
