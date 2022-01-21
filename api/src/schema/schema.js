const { gql } = require('apollo-server');

module.exports = gql`
type Query {
    getGistById(id: ID): Gist
}
type Gist {
    id: ID!
    node_id: ID!
    url: String
}`