import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './reset.css';
import './index.css';
import Home from './pages/Home/Home';
import ProjectPost from './pages/ProjectPost/ProjectPost';
import PageNotFound from './pages/PageNotFound/PageNotFound';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/project/:id" element={<ProjectPost/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
