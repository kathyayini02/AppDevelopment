import React, { useState } from 'react';
import './register.css';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { blue } from '@mui/material/colors';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const nav = useNavigate();
  const [username, setName] = useState('');
  const [emailid, setEmail] = useState('');
  const [mobileno, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const authenticate = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/auth/register", {
        username,
        emailid,
        mobileno,
        password
      });
      nav("/");
    } catch (error) {
  console.log(error);
    }
  }

  return (
    <>
      <div className="login-page2">
        <div className="login2">
          <center><h2>Registration</h2></center>
          <form className="form-login2" onSubmit={authenticate}>
            <label htmlFor="name">Username</label>
            <div className="input-email">
              <AccountCircleIcon sx={{ color: blue[900] }} fontSize='medium' color='success' />
              <input type="text" placeholder="Enter your Name" value={username} onChange={(e) => setName(e.target.value)} required />
            </div><br />

            <label htmlFor="email">E-mail</label>
            <div className="input-email">
              <EmailIcon sx={{ color: blue[900] }} fontSize='medium' color='success' />
              <input type="email" value={emailid} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your E-mail" required />
            </div><br />

            <label htmlFor="mobile">MobileNo</label>
            <div className="input-email">
              <PhoneAndroidIcon sx={{ color: blue[900] }} fontSize='medium' color='success' />
              <input type="tel" pattern="[6789][0-9]{9}" minLength={10} maxLength={10} value={mobileno} onChange={(e) => setMobile(e.target.value)} placeholder="Enter your Number" required />
            </div><br />

            <label htmlFor="password">Password</label>
            <div className="input-password">
              <LockIcon sx={{ color: blue[900] }} fontSize='medium' color='success' />
              <input type="password" minLength={8} maxLength={16} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" required />
            </div>
            <button type="submit">Register</button>

            <Link to="/" style={{ textDecoration: "none" }}><h5>Already Have An Account?</h5></Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
