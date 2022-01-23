import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

const GIST = gql`
    query getGistById($id: ID){
        getGistById(id: $id) {
            id
            description
            created_at
            isFavorited
            files {
                filename
            }
        }
    }
`;

function GistDetails () {
    const { gist_id } = useParams();
    const { loading, error, data } = useQuery(GIST, {
        variablesid: { id: gist_id }
    });

    if(loading) {
        return <p>Loading Gist...</p>
    }
    if(error) {
        return <p>Error! {error.message}</p>
    }
    console.log(data);

    return (
        <>
            <p>The Gist ID is: <span>{gist_id}</span></p>
            <div>
                <p></p>
            </div>
        </>
        
    )
}

export default GistDetails;