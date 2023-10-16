
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import React from 'react';
import Login from './login';

import NavBar from './layout/NavBar';
import Footer from './layout/Footer';

import Sidebar from './layout/Sidebar';
import Home from './layout/Home';
import Contact from './layout/Contact';
import Services from './layout/Services';
import Qu from './layout/Qu';
import PrivacyPolicy from './layout/PrivacyPolicy';
import Feedback from "./layout/Feedback"
import { BiSolidDashboard} from "react-icons/";
import Signup from './register';
import Appointment from './layout/Appointment';
import PaymentMethod from './layout/PaymentMethod';
import History from './layout/History';


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/loginbtn" element={<NavBar/>}/>
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/que" element={<Sidebar/>}/>
      <Route path="/product" element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/service' element={<Services/>}/>
      <Route path='/Qu' element={<Qu/>}/>
      <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
      <Route path='/Feedback' element={<Feedback/>}/>
      <Route path='/Appointment' element={<Appointment/>}/>
      <Route path='/PaymentMethod' element={<PaymentMethod/>}/>
      <Route path='/History' element={<History/>}/>
     

      </Routes>
     
    
    </BrowserRouter>
  </div>
  );
}

export default App;
