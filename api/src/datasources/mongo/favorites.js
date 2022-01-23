const { MongoDataSource } = require('apollo-datasource-mongodb');
const _ = require('lodash');

class FavoritesAPI extends MongoDataSource {
    async getFavorites() {
        return await this.findByFields({});
    }
    async getIsGistFavorited(id) {
        const favorited = await this.findByFields({id});
        return _.some(favorited);
    }

    async addFavorite(favorite) {
        // Don't use MongoDB's auto generated id, so duplicates for sure can't be added. Just in case (tm)
        favorite._id = favorite.id;
        const result = await this.collection.insertOne(favorite);
        return result.insertedId ? favorite.id : null;
    }

    async deleteFavorite(id) {
        const result = await this.collection.deleteOne({id});
        return result.deletedCount > 0 ? id : null;
    }
}

module.exports = FavoritesAPI;