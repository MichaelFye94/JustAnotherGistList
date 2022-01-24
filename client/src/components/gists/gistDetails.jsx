import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Card, CardContent, Typography } from "@material-ui/core";
import FavoriteIcon from './FavoriteIcon';
import FileList from './FileList';
import BackButton from '../navigation/BackButton';
import { GIST } from '../../graph/queries/gistQueries.js';
import './GistDetails.css';



function GistDetails () {
    const { gist_id } = useParams();
    const { loading, error, data } = useQuery(GIST, {
        variables: { id: gist_id }
    });

    if (loading) {
        return <p>Loading Gist...</p>
    }
    if (error) {
        return <p>Error! {error.message}</p>
    }

    const gist = data.getGistById;

    return (
        <>
            <BackButton />
            <Card className="details-root">
                <CardContent>
                    <div className="details-header">
                        <Typography variant="h5" component="h2">
                            {gist.description || "No Description Available..."}
                        </Typography>
                        <FavoriteIcon gist={gist} />
                    </div>
                    <Typography>
                        Created on: {new Date(gist.created_at).toLocaleDateString()}
                    </Typography>
                    <FileList files={gist.files} />
                </CardContent>
            </Card>
        </>

    )
}

export default GistDetails;