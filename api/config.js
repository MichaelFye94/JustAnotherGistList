const config = {};

config.port = process.env.PORT || 4000;
config.mongoURL = 'mongodb://localhost:27017';

module.exports = config;