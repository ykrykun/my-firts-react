import React from 'react';
import Chats from './Chats';
import Message from './Message';
import s from './dialogs.module.css';

const Dialogs = () => {
    // let dialogsData = [
    //     {id: 1, name: 'Name 1'},
    //     {id: 2, name: 'Name 2'},
    //     {id: 3, name: 'Name 3'},
    //     {id: 4, name: 'Name 4'},
    //     {id: 5, name: 'Name 5'}
    // ]
    return (
        <div className='content'>
            <div className={s.dialogs}>
                <Chats/>
                <Message/>
            </div>
        </div>

    )
}

export default Dialogs;