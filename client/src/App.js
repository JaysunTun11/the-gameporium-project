import Homepage from './components/Homepage'
import Navbar from './components/Navbar'

import AboutUs from './components/AboutUs'
import BuyPage from './components/Buy'
import ListingPage from './components/Listings'
import SellPage from './components/Sell'
import {BrowserRouter as Router, Route, Routes, Redirect} from 'react-router-dom'
import LoginPage from './components/Login'
import jwt_decode from "jwt-decode"
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import React, {Fragment, useState, useEffect} from "react";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };


  return (
     <div id = "App">
      
    <Router>
    <Navbar />
    <Routes>

    <Route exact path='/' element ={<Homepage />} />
    <Route exact path='/register' element = {<Register  setAuth ={setAuth}/>}   />
    <Route exact path='/aboutus' element={<AboutUs/>} />
    <Route exact path='/listings' element={<ListingPage/>} />
    <Route exact path='/buy' element={<BuyPage/>} />
    <Route exact path='/sell' element={<SellPage/>} />

    <Route exact path='/login' element={<LoginPage setAuth ={setAuth}/>} />
    
    <Route path='/dashboard' element={<Dashboard setAuth ={setAuth}/>} />
    </Routes>
    </Router>
    
    </div>
     
    
   
  );
}




export default App;
