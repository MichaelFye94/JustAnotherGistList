import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import GistList from '../../gists/gistList';

const USERGISTS = gql`
    query UserGists($username: String) {
        getGistsByUsername(username: $username) {
            id
            description
            created_at
            isFavorited
            files {
                filename
            }
        }
    }
`

function User () {
    const { username } = useParams();
    console.log(username);
    const { loading, error, data } = useQuery(USERGISTS, {
        variables: { username: username }
    });

    if (loading) {
        return <p>Loading data...</p>
    }
    if (error) {
        return <p>Error! {error.message}</p>
    }

    console.log(data);
    return (
        <>
            <div>User Works!</div>
            <GistList gists={data.getGistsByUsername} />
        </>
    )
}

export default User;