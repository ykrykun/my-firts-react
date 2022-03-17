import React from 'react';
import './Header.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
        <img src='https://static.tildacdn.com/tild6234-3366-4238-a432-366562316139/logo__wh.png' />
        <nav className='nav'>
        <div>
          <a href='/' className='link'>Home</a>
          <a href='/dialogs' className='link'>Dialogs</a>
          <a href='/news' className='link'>News</a>
          <a href='/set' className='link'>Setting</a>
        </div>
      </nav>
      </header>
    )
}

export default Header;