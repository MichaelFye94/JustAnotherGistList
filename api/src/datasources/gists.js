const { RESTDataSource } = require('apollo-datasource-rest');
const _ = require('lodash');

const gistsJSON = require('../data/sample_gist.json');

class GistAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = '';
    }

    initialise(config){ }

    getGistById(id) {
        console.log(id);
        const gists = _.filter(gistsJSON, { id });
        return gists[0];
    }
}

module.exports = GistAPI;