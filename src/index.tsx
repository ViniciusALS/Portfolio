import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './reset.css';
import './index.css';
import Home from './pages/Home';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/404" element={<Home/>}/>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
