class GistHelpers {
    static convertFileFormat(gist) {
        const convertedFile = gist;
        convertedFile.files = Object.values(gist.files);
        return convertedFile;
    }
}

module.exports = GistHelpers;