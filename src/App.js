//import React from 'react';
import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import {Menu_List} from './data';
import { useGlobalContext } from './context';

// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
const allCategories = ['all', ...new Set(Menu_List.map((item) => item.category))];


function App() {
	const [menuItems, setMenuItems] = useState(Menu_List);
	const [categories, setCategories] = useState(allCategories);

	const filterItems = (category) => {
		if (category === 'all') {
		setMenuItems(Menu_List);
		return;
		}
		const newItems = Menu_List.filter((item) => item.category === category);
		setMenuItems(newItems);
	};
	return (
		<main>
			<Navbar />
			<section className="menu section">
				<div className="title">
					<h2>our menu</h2>
					<div className="underline"></div>
				</div>
				<Categories categories={categories} filterItems={filterItems} />
				<Menu Menu_List={menuItems} />
			</section>
			<CartContainer /> 		
		</main>
	)
}

export default App
