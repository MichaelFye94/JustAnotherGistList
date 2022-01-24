import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";

function File ({ file }) {
    return (
        <Card className="summary-root">
            <CardContent>
                <Typography variant="h5" component="h2">
                    {file.filename || "No Filename..."}
                </Typography>
                <Typography>
                    Type: {file.type}
                </Typography>
                <Typography>
                    Language: {file.language}
                </Typography>
                <Typography>
                    Size: {file.size}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="medium">
                    <a target="_blank" rel="noreferrer" href={file.raw_url}>
                        View File
                    </a>
                </Button>
            </CardActions>
        </Card>
    );
}

export default File;