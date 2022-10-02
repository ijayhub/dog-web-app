import React from 'react'
import Home from './components/Home'
import {Routes, Route} from 'react-router-dom'
import AboutDogs from './components/AboutDogs';
import DogsDetails from './components/DogsDetails';

const App = () => {
  return (
		<>
		
			<div>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='AboutDogs' element={<AboutDogs />}></Route>
					<Route path='/:name' element={<DogsDetails />}></Route>
				</Routes>
			</div>
		</>
	);
}

export default App
