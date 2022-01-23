import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/home';
import User from './components/pages/users/user';
import Favorites from './components/pages/favorites/favorites';
import GistDetails from './components/gists/gistDetails';

function AppRoutes() {
    return (
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/favorites/:gist_id' element={<GistDetails />} />
          <Route path='/users/:username' element={<User />} />
          <Route path='/users/:username/gist/:gist_id' element={<GistDetails />} />
        </Routes>
    );
}

export default AppRoutes;