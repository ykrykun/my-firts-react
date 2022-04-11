import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
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
    )
}

export default Header;