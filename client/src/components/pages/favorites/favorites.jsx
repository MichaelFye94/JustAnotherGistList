import { gql, useQuery } from '@apollo/client';
import GistList from '../../gists/gistList';

const FAVORITES = gql`
    query Favorites {
        getFavorites {
            id
            description
            created_at
            isFavorited
        }
    }
`;

function Favorites () {
    const { loading, error, data } = useQuery(FAVORITES);
    if (loading) {
        return <p>Loading data...</p>
    }
    if (error) {
        return <p>Error! {error.message}</p>
    }
    console.log(data);
    return (
        <>
            <div>Favorites works!</div>
            <GistList gists={data.getFavorites} />
        </>
    );
}

export default Favorites;