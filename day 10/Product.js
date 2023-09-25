import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/cartSlice'; // Adjust the path as needed
import './Product.css';
const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <div className='d'>{product.description}</div>
      <p>Price: ${product.price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;