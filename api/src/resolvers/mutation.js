module.exports = {
    async addFavorite(parent, { id }, { dataSources }, info) {
        const gist = await dataSources.gistsAPI.getGistById(id);
        if(gist) {
            return await dataSources.favoritesAPI.addFavorite(gist);
        }
        return null;
    },
    async deleteFavorite(parent, { id }, { dataSources }, info) {
        return await dataSources.favoritesAPI.deleteFavorite(id);
    }
}