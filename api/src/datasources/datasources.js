const { MongoClient } = require('mongodb');
const { GistsAPI, UsersAPI } = require('./rest/github');
const FavoritesAPI = require('./mongo/favorites');
const config = require ('../../config');

const client = new MongoClient(`${config.mongoURL}/jagl`);
client.connect();
module.exports = () => ({
    gistsAPI: new GistsAPI(),
    usersAPI: new UsersAPI(),
    favoritesAPI: new FavoritesAPI(client.db().collection('favorites'))
});