import { useQuery } from '@apollo/client';
import GistList from '../../gists/GistList';
import BackButton from '../../navigation/BackButton';
import { ALL_FAVORITES } from '../../../graph/queries/favoritesQueries.js';

function FavoritesPage () {
    const { loading, error, data } = useQuery(ALL_FAVORITES, { fetchPolicy: "no-cache" });
    if (loading) {
        return <p>Loading data...</p>
    }
    if (error) {
        return <p>Error! {error.message}</p>
    }
    
    return (
        <>
            <BackButton />
            <GistList gists={data.getFavorites} />
        </>
    );
}

export default FavoritesPage;