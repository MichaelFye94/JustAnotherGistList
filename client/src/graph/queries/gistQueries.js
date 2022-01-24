import { gql } from '@apollo/client';

export const GIST = gql`
    query getGistById($id: ID){
        getGistById(id: $id) {
            id
            description
            created_at
            isFavorited
            files {
                filename
                type
                language
                size
                raw_url
            }
        }
    }
`;