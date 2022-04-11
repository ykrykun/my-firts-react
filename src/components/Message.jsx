import React from 'react';
import s from './dialogs.module.css';

const Text = (props) => {
    return (
        <div>{props.mes}</div>
    )
}

const Message = (props) => {

    // let messagesData = [
    //     {id: 1, mes: 'Text 1'},
    //     {id: 1, mes: 'Text 2'},
    //     {id: 1, mes: 'Text 3'},
    //     {id: 1, mes: 'Text 4'},
    //     {id: 1, mes: 'Text 5'}
    // ]

    let messagesEl = props.state.messages.map ( m => <Text mes={m.mes} />);

    return (
        <div className={s.message}>
            {messagesEl}
        </div>
    )
}

export default Message;