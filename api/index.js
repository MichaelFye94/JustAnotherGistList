const { ApolloServer } = require('apollo-server');

const typeDefs = require("./src/schema/schema");
const resolvers = require('./src/resolvers/resolvers');
const dataSources = require('./src/datasources/datasources');

const server = new ApolloServer({typeDefs, resolvers, dataSources, introspection: true});

server
    .listen({port: process.env.PORT || 4000})
    .then(({url}) => {
        console.log(`graphQL running at ${url}`);
    })