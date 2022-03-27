import React from "react";
import s from "./dialogs.module.css";
import {iconTypes, iconDefs} from "./Button/icons";
import {Icon} from './Button/icon';
import {Button} from './Button/button';

const NewsT = (props) => {
    return (
        <div>{props.newsData}</div>
    )
}

const News = (props) => {
    let newsData = [
        {id: 1, message: 'Hi, how are you?'},
        {id: 2, message: 'Hi, how are you? 2'},
        {id: 3, message: 'Hi, how are you? 3'},
        {id: 4, message: 'Hi, how are you?4'}
    ]
    let newsEl = newsData.map(n => <NewsT newsData={n.message}/>);
    return (
        <div className='content'>
            <h2>NEWS</h2>
            {newsEl}
            <div>
                <Button size="small" iconType={iconTypes.packman}>PACKMAN</Button>
                <Button color="primary" iconType={iconTypes.plus}>NEW BTN</Button>
                {/*<Icon type={iconTypes.packman} fill="red"  />*/}
                {/*<Icon type={iconTypes.plus} fill="green" />*/}
            </div>
        </div>
    )
}


export default News;

