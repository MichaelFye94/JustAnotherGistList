module.exports = {
    async getGistsByUsername(parent, { username }, { dataSources }, info) {
        return await dataSources.usersAPI.getGistsByUsername(username);
    },
    async getGistById(parent, { id }, { dataSources }, info) {
        return await dataSources.gistsAPI.getGistById(id);
    },
    async getFavorites(parent, args, { dataSources }, info) {
        return await dataSources.favoritesAPI.getFavorites();
    }
}