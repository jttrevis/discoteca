import React from 'react'
import { Contact } from './pages/Contact/Contact';
import { Gallery } from './pages/Gallery/Gallery';
import { Home } from './pages/Home/Home'
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";


import './styles/global.scss'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/gallery' element={<Gallery />} />
			</Routes>

		</BrowserRouter>
	)
}

export default App