import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Navbar () {
    return (
        <AppBar color='primary' position='static'>
            <Toolbar>
                <Typography variant='h4'>
                    Just Another Gist List
                </Typography>
                <div>
                    <Typography>
                        <Link to='/'>
                            Home
                        </Link>
                    </Typography>
                    <Typography>
                        <Link to='/favorites'>
                            Favorites
                        </Link>
                    </Typography>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;