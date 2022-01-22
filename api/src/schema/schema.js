const { gql } = require('apollo-server');
const { GraphQLJSONObject } = require('graphql-type-json');

module.exports = gql`
type Query {
    getGistsByUsername(username: String): [Gist]
    getGistById(id: ID): Gist
}
type Gist {
    id: ID!
    node_id: ID!
    url: String
    foks_url: String
    commits_url: String
    git_pull_url: String
    git_push_url: String
    html_url: String
    public: Boolean
    created_at: String
    updated_at: String
    description: String
    comments: Int
    comments_url: String
    truncated: Boolean
    files: [File]
}
type File {
    filename: String
    type: String
    language: String
    raw_url: String
    size: Int
}`