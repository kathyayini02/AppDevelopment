import React from 'react';
import { useSelector } from 'react-redux';
import PopupMenu from './PopupMenu';
import './Cart.css';
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className='Car'>
      <h1>
    <div className="rectangle">
    <div className="heading">CART</div>
    </div></h1><br/><br/>
    <div className='ca'>
    <ul> 
        {cartItems.map((item, index) => (
          <li  key={index}>{item.name}</li>
        ))}
        </ul>
      </div>
      <PopupMenu/><br/>
    </div>
  );
};

export default Cart;