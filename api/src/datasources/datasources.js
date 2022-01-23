const GistAPI = require('./gists');
const FavoritesAPI = require('./mongo/favorites');
const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017/jagl');
client.connect();
module.exports = () => ({
    gistAPI: new GistAPI(),
    favoritesAPI: new FavoritesAPI(client.db().collection('favorites'))
});