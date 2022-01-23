module.exports = {
    async getGistsByUsername(parent, { username }, { dataSources }, info) {
        return await dataSources.gistAPI.getGistsByUsername(username);
    },
    async getGistById(parent, { id }, { dataSources }, info) {
        return await dataSources.gistAPI.getGistById(id);
    },
    async getFavorites(parent, args, { dataSources }, info) {
        return await dataSources.favoritesAPI.getFavorites();
    }
}