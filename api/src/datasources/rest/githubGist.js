const { RESTDataSource } = require('apollo-datasource-rest');
const GistHelpers = require('../../helpers/gistHelpers');

class GistsAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.github.com/gists';
    }

    async getGistById(id) {
        const data = await this.get(`/${id}`);
        const gist = GistHelpers.convertFileFormat(data);
        return gist;
    }
}

module.exports = GistsAPI;