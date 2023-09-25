import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/userSlice";
import SignedInLink from './SignedInLink'
import SignedOutLink from './SignedOutLink'
import './NavBar.css';
import Cities from './cities';


import Footer from './Footer';


import Solution from './Solution';

import Youtube from './Youtube';




const NavBar=()=>{
    const user = useSelector(selectUser);
  
  const username =
    user.user && user.user.username ? user.user.username : "Guest";
    
    return(
      <div className="a">
        
        <nav className="navnav">
          <Link to='loginbtn' className="brand-logo">VEHICLE EHUB</Link>
          <SignedInLink/>
          <SignedOutLink/>
        </nav>      
        
          <div id="user">WELCOME ,  {username}</div>
          
          
      
          
            <br/>
          <Solution/>
          <Youtube/>
          <div className="App">
      {/* Other components */}
      
    </div>
          
          <Footer/>
            
         
         
      </div>
    )
}
export default NavBar;