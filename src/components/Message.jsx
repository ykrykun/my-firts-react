import React from 'react';
import s from './dialogs.module.css';

const Text = (props) => {
    return (
        <div>{props.mes}</div>
    )
}

const Message = (props) => {
    let messagesData = [
        {id: 1, mes: 'Text 1'},
        {id: 1, mes: 'Text 2'},
        {id: 1, mes: 'Text 3'},
        {id: 1, mes: 'Text 4'},
        {id: 1, mes: 'Text 5'}
    ]
    return (
        <div className={s.message}>
            <Text mes={messagesData[0].mes}/>
            <Text mes={messagesData[1].mes}/>
            <Text mes={messagesData[2].mes}/>
            <Text mes={messagesData[3].mes}/>
            <Text mes={messagesData[4].mes}/>

        </div>
    )
}

export default Message;