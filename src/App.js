import React from 'react';
import './App.css';
import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
import Dialogs from './components/Dialogs.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Routes>
                    <Route path='/' exact element={<Home/>}/>
                    <Route path='/dialogs' element={<Dialogs/>}/>
                </Routes>
            </div>
        </BrowserRouter>);
}

export default App;