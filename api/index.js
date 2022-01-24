const { ApolloServer } = require('apollo-server');

const typeDefs = require("./src/schema/schema");
const resolvers = require('./src/resolvers/resolvers');
const dataSources = require('./src/datasources/datasources');
const config = require('./config');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
    introspection: true,
formatError: (error) => {
    // Scrub exception information / stack trace in return data
    if(error.extensions.exception) {
        error.extensions.exception = null;
    }
    return error;
}});

server
    .listen({port: config.port})
    .then(({url}) => {
        console.log(`graphQL running at ${url}`);
    });