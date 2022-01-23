module.exports = {
    addFavorite: (parent, { favorite }, { dataSources }, info) => {
        return dataSources.favoritesAPI.addFavorite(favorite);
    },
    deleteFavorite: (parent, { id }, { dataSources }, info) => {
        return dataSources.favoritesAPI.deleteFavorite(id);
    }
}