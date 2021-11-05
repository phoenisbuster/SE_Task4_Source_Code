/*import './App.css';*/
import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import {Menu_List} from './data';
import { useGlobalContext } from './context';

// components
import Navbar from './Navbar';
import GenerateMenu from './GenerateMenu';
import CartContainer from './CartContainer';

const allCategories = ['all', ...new Set(Menu_List.map((item) => item.category))];


function App() {
	return (
		<main>
			<Navbar />
			<GenerateMenu />
			<CartContainer /> 		
		</main>
	)
}

export default App;
