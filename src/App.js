import React from 'react';
import './App.css';
import Header from './components/Header';
import Login from "./components/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/404";
import Dialogs from "./components/Dialogs";
import News from "./components/News";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route element={<NotFound />} />
                    <Route path="/dialogs" render={ () => <Dialogs state={props.state.dialogPage} /> } />
                    <Route path="/news" render={ () => <News state={props.state.newsPage} /> } />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;