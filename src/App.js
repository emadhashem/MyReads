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
  const [books , setbooks] = useState();
  function setActions(actions) {
    setactions(actions)
  }
  function setBooksToState(books) {
    setbooks(books)
  }
  return (
    <>
      <Routes>
        <Route path='/' element = {<MainPage setActions = {setActions} setBooksToState = {setBooksToState} />} />
        <Route path='/search' element = {<SearchPage actions = {actions} books = {books} />} />
      </Routes>
      <Footer />
    </>
    
    
  );
}

export default App;
