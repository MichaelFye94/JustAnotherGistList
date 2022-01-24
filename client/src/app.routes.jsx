import { Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/home/Home';
import UserPage from './components/pages/users/User';
import FavoritesPage from './components/pages/favorites/Favorites';
import GistDetails from './components/gists/GistDetails';

function AppRoutes() {
    return (
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
          <Route path='/users/:username' element={<UserPage />} />
          <Route path='/gist/:gist_id' element={<GistDetails />} />
        </Routes>
    );
}

export default AppRoutes;