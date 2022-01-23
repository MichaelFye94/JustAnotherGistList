const { GistsAPI, UsersAPI } = require('./rest/github');
const FavoritesAPI = require('./mongo/favorites');
const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017/jagl');
client.connect();
module.exports = () => ({
    gistsAPI: new GistsAPI(),
    usersAPI: new UsersAPI(),
    favoritesAPI: new FavoritesAPI(client.db().collection('favorites'))
});