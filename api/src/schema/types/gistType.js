module.exports = 
`type Gist {
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
}`
