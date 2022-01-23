const { gql } = require('apollo-server');

module.exports = gql`
type Query {
    getGistsByUsername(username: String): [Gist]
    getGistById(id: ID): Gist
    getFavorites: [Gist]
}
type Mutation {
    addFavorite(id: ID): ID
    deleteFavorite(id: ID): ID
}
input FileInput {
    filename: String
    type: String
    language: String
    raw_url: String
    size: Int
}
type Gist {
    id: ID!
    node_id: ID!
    url: String
    forks_url: String
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
    isFavorited: Boolean
    files: [File]
}
type File {
    filename: String
    type: String
    language: String
    raw_url: String
    size: Int
}`