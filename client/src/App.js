import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from './components/navigation/navbar';
import Home from './components/pages/home/home';
import Favorites from './components/pages/favorites/favorites';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
