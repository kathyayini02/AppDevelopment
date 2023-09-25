import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/userSlice";
import SignedInLink from './SignedInLink'
import SignedOutLink from './SignedOutLink'
import './NavBar.css';


import Footer from './Footer';
import Cities from './Cities';
import About from './About';
import Move from './Move';
import Solution from './Solution';
import Feedback from './Feedback';
import Youtube from './Youtube';
import Home from './Home';

const NavBar=()=>{
    const user = useSelector(selectUser);
  
  const username =
    user.user && user.user.username ? user.user.username : "Guest";
    
    return(
      <div className="a">
        
        <nav className="navnav">
          <Link to='loginbtn' className="brand-logo">VEHICLE REPAIR HUB</Link>
          <SignedInLink/>
          <SignedOutLink/>
        </nav>      
        
          <div id="user">WELCOME ,  {username}</div>
          
          <About/>
      <Home/>
          <Cities/>
            <br/>
          <Solution/>
          <Youtube/>
          <Feedback/>
          <Footer/>
            
         
         
      </div>
    )
}
export default NavBar;