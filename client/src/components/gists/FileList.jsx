import File from './File';

function FileList ({ files }) {
    return files.map((file) => (
        <File
            file={file}
            key={file.raw_url} />
    ))
}

export default FileList;