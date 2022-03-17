import React from 'react';
import two from './Two_screen.module.css';
import Review from './Review.jsx';

const Two_screen = () => {
    return (
        <div className={two.content}>
            <h1>Analytics that transformyour product inside-out</h1>
            <Review text='Hello!'/>
            <Review text="It's my post"/>
            <Review text="Hi! How are U"/>
            <Review text="Nice!"/>
        </div>
        )
}

export default Two_screen;