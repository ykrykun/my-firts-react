import React from 'react';
import './Header.css';
import {BrowserRouter, Router, Route, Routes, Link, Switch} from 'react-router-dom';
import Dialogs from './Dialogs';
import Home from './Home';
import News from './News';
import Login from './Login';
import NotFound from "./404";

const Header = (props) => {
    return (
        <BrowserRouter>
            <header className='header'>
                <img src='https://static.tildacdn.com/tild6234-3366-4238-a432-366562316139/logo__wh.png'/>
                <nav className='nav'>
                    <div>
                        <a href='/' className='link'>Home</a>
                        <a href='/dialogs' className='link'>Dialogs</a>
                        <a href='/news' className='link'>News</a>
                        <a href='/login' className='link'>Login</a>
                    </div>
                </nav>
            </header>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route element={<NotFound />} />
                <Route path="/dialogs" element={<Dialogs />} />
                <Route path="/news" element={<News />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Header;