import React from 'react';
import two from './Two_screen.module.css';

const Review = (props) => {
    // console.log(props.text);
        return (
            <div>
            <div className={two.review}>
            <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" />
            <p>{props.text}</p>
        </div>
        </div>
        )
    }
export default Review