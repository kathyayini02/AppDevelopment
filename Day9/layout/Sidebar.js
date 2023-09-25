import React from 'react';
import '../layout/Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bo">
    <div className="center-image">
      <img src="https://vehiclecare.in/static/media/whyus.4c7c2a993d38679f529794acfa309960.svg" alt="Centered Image" />
    </div>
    <div className="sidebar">
      <div className="sidebar-header">
      <h2>
            <Link to='/loginbtn'><div className="continue-btn">BACK</div></Link></h2>
        <h3>DASHBOARD</h3>
      </div>
      <ul className="sidebar-menu">       
      <Link to='/about'><div className='panel'>ABOUT US</div></Link>
      <Link to='/product'><div className='panel'>PRODUCTS</div></Link>
      <Link to='/cities'><div className='panel'>CITIES</div></Link>
      <Link to='/soln'><div className='panel'>SOLUTIONS</div></Link>
      <Link to='/vid'><div className='panel'>VIDEO TUTORIALS</div></Link>
      <Link to='/feed'><div className='panel'>FEEDBACK</div></Link>
      </ul>
    </div>
    </div>
  );
}

export default Sidebar;