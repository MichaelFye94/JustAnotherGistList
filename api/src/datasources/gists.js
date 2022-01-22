const { RESTDataSource } = require('apollo-datasource-rest');
const _ = require('lodash');

const gistsJSON = require('../data/sample_gist.json');

class GistAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.github.com';
    }

    initialise(config){ }

    async getGistsByUsername(username) {
        const data = await this.get(`/users/${username}/gists`);
        const gists = [];
        // Convert gists `files` into a format that is more usable by graphQL
        _.forEach(data, (value) => {
            gists.push(this.convertFileFormat(value));
        })
        return gists;
    }

    async getGistById(id) {
        const data = await this.get(`/gists/${id}`);
        const gist = this.convertFileFormat(data);
        return gist;
    }

    convertFileFormat(gist) {
        const convertedFile = gist;
        convertedFile.files = Object.values(gist.files);
        return convertedFile;
    }
}

module.exports = GistAPI;