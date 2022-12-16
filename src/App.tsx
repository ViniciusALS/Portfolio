import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, NotFound, Project } from './pages';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/project/:slug" element={<Project />}/>
				<Route path="*" element={<NotFound />}/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
