import Homepage from './components/Homepage'
import Navbar from './components/Navbar'

import AboutUs from './components/AboutUs'
import BuyPage from './components/Buy'
import ListingPage from './components/Listings'
import SellPage from './components/Sell'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LoginPage from './components/Login'

import Register from './components/Register'
import Dashboard from './components/Dashboard'
import React, {useState, useEffect} from "react";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  
  const setAuth = () => {
    setIsAuthenticated((current) => !current);
  };

  async function isAuth(){
    try{
      const response = await fetch("http://localhost:5000/auth/is-verify", {
        method: "GET",
        headers: {token : localStorage.token}
      });


      const parseRes = await response.json()

      parseRes === true ? setIsAuthenticated(true):
      setIsAuthenticated(false)
    } catch (err){
      console.error(err.message)
    }
  }
  
  useEffect(() => {
    isAuth()
  })

  return (
     <div id = "App">
      
    <Router>
    <Navbar setAuth ={setAuth} isAuthenticated = {isAuthenticated}/>
    <Routes>
    
    <Route exact path='/' element ={<Homepage setAuth ={setAuth} setIsAuthenticated = {setIsAuthenticated}/>} />
    <Route exact path='/register' element = {<Register  setAuth ={setAuth} isAuthenticated = {isAuthenticated}/>}   />
    <Route exact path='/aboutus' element={<AboutUs/>} />
    <Route exact path='/listings' element={<ListingPage/>} />
    <Route exact path='/buy' element={<BuyPage/>} />
    <Route exact path='/sell' element={<SellPage/>} />

    <Route exact path='/login' element={<LoginPage setAuth ={setAuth} isAuthenticated = {isAuthenticated}/>} />
    
    <Route path='/dashboard' element={<Dashboard setAuth ={setAuth} isAuthenticated = {isAuthenticated}/>} />
    </Routes>
    </Router>
    
    </div>
     
    
   
  );
}




export default App;
