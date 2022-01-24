import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import GistList from '../../gists/GistList';
import BackButton from '../../navigation/BackButton';
import { USERGISTS } from '../../../graph/queries/userQueries.js';

function UserPage () {
    const { username } = useParams();
    const { loading, error, data } = useQuery(USERGISTS, {
        variables: { username: username },
        fetchPolicy: "no-cache"
    });

    if (loading) {
        return <p>Loading data...</p>
    }
    if (error) {
        return <p>Error! {error.message}</p>
    }

    return (
        <>
            <BackButton />
            <GistList gists={data.getGistsByUsername} />
        </>
    )
}

export default UserPage;