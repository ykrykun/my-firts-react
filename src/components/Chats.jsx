import React from 'react';
import s from './dialogs.module.css';
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';

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
    return (
        <div className={s.chats}>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
            <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
            <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>

        </div>
    )
}

export default Chats;