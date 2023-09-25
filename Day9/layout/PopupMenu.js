import React, { useState } from 'react';
import './PopupMenu.css'; // Import the CSS file for styling

const PopupMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="popup-menu">
      <button onClick={toggleMenu}>CHECKOUT</button>

      {isMenuOpen && (
        <ul className="menu-list">
          <li>CASH ON DELIVERY AVAILABLE</li>
          
        </ul>
      )}
    </div>
  );
};

export default PopupMenu;
