module.exports = {
    async isFavorited(gist, args, { dataSources }) {
        return await dataSources.favoritesAPI.getIsGistFavorited(gist.id);
    }
}