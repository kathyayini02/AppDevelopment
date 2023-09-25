import React from 'react';
import '../layout/Footer.css';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
       
          <h3>Address</h3>
          <p>123 Main Street<br />City, State<br />Postal Code</p>
        </div>
        <div className="footer-section">
          <h3>we are also available on</h3>
          
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: vehiclerepairhub@gmail.com<br />Phone: +1 (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;