const { RESTDataSource } = require('apollo-datasource-rest');
const _ = require('lodash');
const GistHelpers = require('../../helpers/gistHelpers');

class UsersAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.github.com/users';
    }

    async getGistsByUsername(username) {
        const data = await this.get(`/${username}/gists`);
        const gists = [];
        // Convert gists `files` into a format that is more usable by graphQL
        _.forEach(data, (value) => {
            gists.push(GistHelpers.convertFileFormat(value));
        })
        return gists;
    }
}

module.exports = UsersAPI;