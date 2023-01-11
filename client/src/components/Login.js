import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import React, {useState} from "react";
import { Navigate, redirect } from "react-router-dom";


const LoginPage = ({setAuth}) => {
    const [email, setEmail] = useState('');
    const[pass, setPass] = useState('');
    
   /*  if(setAuth){
      return <Navigate replace to="/dashboard"/>;
    } */


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

    }
    return ( 



      
      
      
        <div className="content">


  
            <br></br>
        <center><h1>Login</h1></center>

        <form onSubmit ={handleSubmit}>
        <center>
        
        <label htmlfor = "Email"></label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type = "email" placeholder ="Email"></input>
      <br></br>
      <br></br>
      <label htmlfor = "Password"></label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type = "password" placeholder ="Password"></input>
    
   
      <br></br>
      <br></br>

      <button type = "submit" className='btn'>Log In</button>
      <button type = "submit" className='btn'>Authenticate</button>
      </center>
      </form>
        <br></br>
      <center><a href = "/Register">Don't have an Account? Register Here.</a> </center>
        </div>

     );
}
export default LoginPage;



