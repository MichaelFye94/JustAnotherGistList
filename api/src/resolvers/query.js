module.exports = {
    getGistById: (parent, { id }, { dataSources }, info) => {
        console.log(id);
        return dataSources.gistAPI.getGistById(id);
    }
}