// @flow
function foo(x) {
  return +x * 10;
}
foo('Hello, world!');

var str: number = 'hello world!';
console.log(str);

// const { graphql } = require('graphql');
// const schema = require('./graphql');
//
// const bcrypt = require('bcrypt');
// const salt = bcrypt.genSaltSync(10);
// console.log('salt = ', salt);
//
// graphql(schema, `
// { hello }
// `).then((response) => {
//   console.log(JSON.stringify(response));
// });
// graphql(schema, `
// {
//   users(id: 1) {
//     id
//     name
//     posts {
//       title
//       body
//     }
//   }
// }
// `).then((response) => {
//   console.log(JSON.stringify(response));
// });
