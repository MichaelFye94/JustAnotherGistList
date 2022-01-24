import { gql } from '@apollo/client';

export const ALL_FAVORITES = gql`
    query Favorites {
        getFavorites {
            id
            description
            created_at
            isFavorited
        }
    }
`;