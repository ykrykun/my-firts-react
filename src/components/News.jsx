import React from "react";

const NewsT = (props) => {
    return (
        <div>{props.newsData}</div>
    )
}

const News = (props) => {
    // let newsData = [
    //     {id: 1, message: 'Hi, how are you?'},
    //     {id: 2, message: 'Hi, how are you? 2'},
    //     {id: 3, message: 'Hi, how are you? 3'},
    //     {id: 4, message: 'Hi, how are you?4'}
    // ]
    let newsEl = props.state.news.map(n => <NewsT newsData={n.message}/>);
    return (
        <div className='content'>
            <h2>NEWS</h2>
            {newsEl}
        </div>
    )
}


export default News;

