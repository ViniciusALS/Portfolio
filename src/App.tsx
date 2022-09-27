import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home/Home";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import ProjectPost from "./pages/ProjectPost/ProjectPost";


export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/project/:id" element={<ProjectPost/>}/>
				<Route path="*" element={<PageNotFound/>}/>
			</Routes>
		</BrowserRouter>
	)
}
