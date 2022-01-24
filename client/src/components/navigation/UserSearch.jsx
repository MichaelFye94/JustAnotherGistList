import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '@material-ui/core/Input';
import './UserSearch.css';

function UserSearch () {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleInputChanged = event => {
        setSearch(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        if(search) {
            navigate(`/users/${search}`);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                 className='user-search-input'
                placeholder="Search username..."
                inputProps={{ 'aria-label': 'search username' }}
                value={search}
                onChange={handleInputChanged}
            />
        </form>
    )
}

export default UserSearch;