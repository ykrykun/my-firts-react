import React from 'react';
import s from './dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Chats = (props) => {
    let dialogsData = [
        {id: 1, name: 'Name 1'},
        {id: 2, name: 'Name 2'},
        {id: 3, name: 'Name 3'},
        {id: 4, name: 'Name 4'},
        {id: 5, name: 'Name 5'}
    ]

    let dialogEl = dialogsData.map( d => <DialogItem name={d.name} id={d.id}/>);

    return (
        <div className={s.chats}>
            {dialogEl}
        </div>
    )
}

export default Chats;