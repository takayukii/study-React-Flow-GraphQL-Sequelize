const { graphql } = require('graphql');
const data = require('./graphql');

graphql(data.schema, `
{ hello }
`,
data.rootValue).then((response) => {
  console.log(JSON.stringify(response));
});
graphql(data.schema, `
{
  users(id: 1) { 
    id 
    name
    bio
    createdAt
    updatedAt
  }
}
`,
data.rootValue).then((response) => {
  console.log(JSON.stringify(response));
});
