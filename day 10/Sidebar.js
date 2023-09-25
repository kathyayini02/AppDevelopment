import React from 'react';
import '../layout/Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
      
        <h2>DASHBOARD</h2>
      </div>
      <ul className="sidebar-menu">
        
        
        <li ><Link style={{color:'maroon'}} to='/product'>Services</Link></li>
        <li ><Link style={{color:'maroon'}} to='/contact'>Contact</Link></li>
        
        <li ><Link style={{color:'maroon'}} to='/Qu'>FAQ</Link></li>
        <li ><Link style={{color:'maroon'}} to='/Feedback'>Feedback</Link></li>
        <li ><Link style={{color:'maroon'}} to='/PrivacyPolicy'>Privacy Policy</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;