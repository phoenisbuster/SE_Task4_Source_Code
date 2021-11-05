import './Menu.css';
import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import {Menu_List} from './data';
const allCategories = ['all', ...new Set(Menu_List.map((item) => item.category))];

function GenerateMenu() {
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
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu Menu_List={menuItems} />
      </section>
    </main>
  );
}

export default GenerateMenu;