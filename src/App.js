import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import NavBar from './components/Navbar/NavBar';
import MainPage from './components/MainPage/MainPage';
import SearchPage from './components/SearchPage/SearchPage';
import Footer from './components/Footer/Footer';
function App() {
  const [actions, setactions] = useState({})
  function setActions(actions) {
    setactions(actions)
  }
  return (
    <>
      <Routes>
        <Route path='/' element = {<MainPage setActions = {setActions} />} />
        <Route path='/search' element = {<SearchPage actions = {actions} />} />
      </Routes>
      <Footer />
    </>
    
    
  );
}

export default App;
