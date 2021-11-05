import './App.css';
import React, { useState } from 'react';

// components
import Navbar from './Components/Navigation Bar/Navbar';
import GenerateMenu from './Components/Menu/GenerateMenu';
import GenerateCart from './Components/Cart/GenerateCart';

function App() {
	return (
		<main>
			<Navbar />
			<GenerateMenu />
			<GenerateCart /> 		
		</main>
	)
};

export default App;
