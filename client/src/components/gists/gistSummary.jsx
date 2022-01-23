function GistSummary({ gist }) {
    console.log(gist);
    return (
        <div>
            <h3>{gist.id}</h3>
            <p>{gist.description}</p>
            <p>{gist.created_at}</p>
        </div>
    )
}

export default GistSummary;