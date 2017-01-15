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
    
    type PostCreateResult {
      errors: [String]
      post: Post
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
      createPost(post: PostInput): PostCreateResult
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

        return new Promise((resolve, reject) => {

          // https://medium.com/@tarkus/validation-and-user-errors-in-graphql-mutations-39ca79cd00bf#.84a1lxq2p
          if (args.post.title.length < 2) {
            return resolve({ // ! Use resolve instead of reject for plain format
              errors: ['title', 'Title must be at a minimum 3 characters']
            });
          }

          models.Post.create(args.post)
            .then((post) => {
              console.log(post);
              if (context.user) {
                post.setUser(context.user);
              }
              return resolve({
                post: post
              });
            })
            .catch((err) => {
              console.log(err);
              return resolve({ // ! Use resolve instead of reject for plain format
                errors: ['', err]
              });
            });
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
