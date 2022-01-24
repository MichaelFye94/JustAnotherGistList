import { gql } from '@apollo/client';

export const USERGISTS = gql`
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