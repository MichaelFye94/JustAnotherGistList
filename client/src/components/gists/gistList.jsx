import GistSummary from "./gistSummary";
function GistList ({ gists }) {
    return gists.map((gist) => (
        <GistSummary
            key={gist.id}
            gist={gist} />
    ))
}

export default GistList;