import React from 'react';
import '../layout/Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
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
          <div className="social-icons">
            
              <FacebookIcon />
           
            <t/>
              <TwitterIcon />
            <t/>
         
              <InstagramIcon />
           
          </div>
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