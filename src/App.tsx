import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, NotFound, Project, Error } from './pages';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/project/:id" element={<Project />}/>
				<Route path="*" element={<NotFound />}/>
			</Routes>
		</BrowserRouter>
	)
}

export default App