import { gql } from '@apollo/client';

export const ADD_FAVORITE = gql`
    mutation AddFavorite($id: ID) {
        addFavorite(id: $id)
    }
`;

export const DELETE_FAVORITE = gql`
    mutation DeleteFavorite($id: ID) {
        deleteFavorite(id: $id)
    }
`;