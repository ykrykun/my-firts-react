import React from 'react';
import './App.css';
import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Dialogs from './components/Dialogs.jsx'
import NotFound from './components/404.jsx'
import Fisrt_screen from './components/Fisrt_screen.jsx';
import Two_screen from './components/Two_screen.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (props) => {

  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/dialogs' element={<Dialogs />} />
      </Routes>
       {/*<BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Two_screen />}>
            <Two_screen />
          </Route>
          <Route exact path="/dialogs" element={<Dialogs />}>
            <Dialogs />
          </Route>
        </Routes>
      </BrowserRouter>*/}
      </div>
      </BrowserRouter>);
}

export default App;