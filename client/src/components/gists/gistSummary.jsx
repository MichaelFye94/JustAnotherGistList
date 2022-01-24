import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "./FavoriteIcon";
import './GistSummary.css';

function GistSummary({ gist }) {
    const navigate = useNavigate();

    return (
        <Card className="summary-root">
            <CardContent>
                <div className="summary-header">
                    <Typography variant="h5" component="h2">
                        {gist.description || "No Description Available..."}
                    </Typography>
                    <FavoriteIcon gist={gist} />
                </div>
                <Typography>
                    Created on: {new Date(gist.created_at).toLocaleDateString()}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => navigate(`/gist/${gist.id}`)}>Details</Button>
            </CardActions>
        </Card>
    )
}

export default GistSummary;