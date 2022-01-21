const GistAPI = require('./gists');
module.exports = () => ({
    gistAPI: new GistAPI()
});