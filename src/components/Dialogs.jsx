import React from 'react';
import Chats from './Chats';
import Message from './Message';
import s from './dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <Chats/>
            <Message/>
        </div>

    )
}

export default Dialogs;