import React from 'react';

import { Home } from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/global.scss';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
