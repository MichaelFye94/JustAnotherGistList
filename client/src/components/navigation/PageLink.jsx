import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './PageLink.css'

function PageLink ({ route, pageName }) {
    return (
        <Link className='page-link-root' to={route}>
            <Typography>
                {pageName}
            </Typography>
        </Link>
    )
}

export default PageLink;