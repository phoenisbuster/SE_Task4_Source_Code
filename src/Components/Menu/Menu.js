import React from 'react';
import styled from "styled-components";
import { useGlobalContext } from '../Cart/context';

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: 0.25rem solid var(--clr-gold);
  color: ${(props) => props.type === "filled" && "white"};
`;

const Menu = ({ Menu_List }) => {
  const { add_to_cart, remove, increase, decrease, toggleAmount } = useGlobalContext()
  return (
    <div className='section-center'>
      {Menu_List.map((menuItem) => {
        const { id, title, img, desc, price, ammount } = menuItem;
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>${price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
            <TopButton onClick={() => add_to_cart(menuItem, 1)}>Add to cart</TopButton>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
