const { Button } = require("@material-ui/core");
const { useNavigate } = require("react-router-dom");

function BackButton() {
    const navigate = useNavigate();

    return (
        <Button onClick={() => navigate(-1)}>Go Back</Button>
    )
}

export default BackButton;