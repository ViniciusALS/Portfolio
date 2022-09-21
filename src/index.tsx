import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './reset.css';
import './index.css';
import Home from './pages/Home/Home';
import ProjectPost from './pages/ProjectPost/ProjectPost';
import PageNotFound from './pages/PageNotFound/PageNotFound';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/project/:id" element={<ProjectPost/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>
);
