const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql');

app.use(express.static('build'));
app.post('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(3000, () => {
  console.log('Listening on 3000');
});
