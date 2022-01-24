import { useMutation } from '@apollo/client';
import { Button, SvgIcon } from '@material-ui/core';
import { useState } from 'react';
import { ADD_FAVORITE, DELETE_FAVORITE } from '../../graph/mutations/favoritesMutations.js';

function FavoriteIcon (props) {
    const { gist } = props;
    const [isFavorite, setFavorite] = useState(gist.isFavorited);

    const iconOutlinePath = "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z";
    const iconFillPath = "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z";


    const onMutationCompleted = () => {
        setFavorite(!isFavorite);
    }
    
    const [onToggleFavoriteHandler, { error }] =
        useMutation(
            isFavorite ? DELETE_FAVORITE : ADD_FAVORITE
        );

    if(error) {
        alert(`Error Occurred: ${error.message}`);
    }

    return (
        <Button onClick={() => onToggleFavoriteHandler(
            {
                variables: { id: gist.id },
                onCompleted: onMutationCompleted
            })}>
            <SvgIcon {...props}>
                <path d={isFavorite ? iconFillPath : iconOutlinePath} />
            </SvgIcon>
        </Button>
    );
}

export default FavoriteIcon;