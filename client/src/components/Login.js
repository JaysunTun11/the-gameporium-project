
import Alert from 'react-bootstrap/Alert';
import React, {useState} from "react";
import { Navigate } from "react-router-dom";


const LoginPage = ({setAuth, isAuthenticated}) => {
    const [email, setEmail] = useState('');
    const[password, setPass] = useState('');

    const [error, setError] = useState(false);
    
    if(isAuthenticated) {
      return <Navigate to="/dashboard" />
  }
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
          <Alert key="danger"  variant="danger">
        <h1>Incorrect Email or Password!</h1>
        </Alert>
      </div>
    );
  };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
          const body = {email, password};

          
          const response = await fetch("http://localhost:5000/auth/login", {
            method: "POST",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(body)
          })
          const parseRes = await response.json();
          if (parseRes !=="Invalid Email") {
            localStorage.setItem("token", parseRes.token);
            setAuth(true);
            console.log(parseRes)
          }else {
            setError(true)
     
            
            }
          
        } catch (err){
          console.error(err.message)
        }

    }
    return ( 



      
      
      
        <div className="content">

{errorMessage()}
  
            <br></br>
        <center><h1>Login</h1></center>

        <form onSubmit ={handleSubmit}>
        <center>
        
        <label htmlfor = "Email"></label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type = "email" placeholder ="Email"></input>
      <br></br>
      <br></br>
      <label htmlfor = "Password"></label>
        <input value={password} onChange={(e) => setPass(e.target.value)} type = "password" placeholder ="Password"></input>
    
   
      <br></br>
      <br></br>

      <button type = "submit" className='btn btn-success btn-block'>Log In</button>

      </center>
      </form>
        <br></br>
      <center><a href = "/Register">Don't have an Account? Register Here.</a> </center>
        </div>

     );
}
export default LoginPage;



