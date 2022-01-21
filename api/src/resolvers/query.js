module.exports = {
    getGistsByUsername: (parent, { username }, { dataSources }, info) => {
        return dataSources.gistAPI.getGistsByUsername(username);
    },
    getGistById: (parent, { id }, { dataSources }, info) => {
        return dataSources.gistAPI.getGistById(id);
    }
}