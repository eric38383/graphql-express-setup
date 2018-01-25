const express = require('express');
const models = require('./models');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');
const app = express()

const MONGO_URI = 'mongodb://admin:password@ds111618.mlab.com:11618/bball'

if(!MONGO_URI) {
    throw new Error('Mongo Uri Required');
}
mongoose.connect(MONGO_URI);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We are Connected!")
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000, () => console.log('Listening on Port 4000'))