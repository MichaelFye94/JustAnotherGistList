module.exports = {
    async isFavorited({ id }, args, { dataSources }) {
        return await dataSources.favoritesAPI.getIsGistFavorited(id);
    }
}