
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import PageLink from './PageLink';
import UserSearch from './UserSearch';
import './Navbar.css';

function Navbar () {

    return (
        <AppBar color='primary' position='static'>
            <Toolbar className='navbar'>
                <Typography variant='h6'>
                    Just Another Gist List
                </Typography>
                <PageLink route='/' pageName='Home' />
                <PageLink route='/favorites' pageName='Favorites' />
                <UserSearch />
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;