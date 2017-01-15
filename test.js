const { graphql } = require('graphql');
const schema = require('./graphql');

graphql(schema, `
{ hello }
`).then((response) => {
  console.log(JSON.stringify(response));
});
graphql(schema, `
{
  users(id: 1) {
    id
    name
    posts {
      title
      body
    }
  }
}
`).then((response) => {
  console.log(JSON.stringify(response));
});
