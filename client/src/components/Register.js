import React, {Fragment, useState} from "react";
import Alert from 'react-bootstrap/Alert';
import { Navigate} from "react-router-dom";
const Register = ({setAuth, isAuthenticated}) => {
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [pass2, setPass2] = useState("");
    const [name, setName] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [error2, setError2] = useState(false);



    if(isAuthenticated) {
      return <Navigate to="/dashboard" />
  }

    const successMessage = () => {
        return (
          <div
            className="success"
            style={{
              display: submitted ? '' : 'none',
            }}>
              <Alert key="success"  variant="success">
            <h1>User {name} successfully registered!!</h1>
            </Alert>
          </div>
        );
      };

    const errorMessage = () => {
        return (
          <div
            className="error"
            style={{
              display: error ? '' : 'none',
            }}>
              <Alert key="danger"  variant="danger">
            <h1>Please enter all the fields</h1>
            </Alert>
          </div>
        );
      };
    
    const errorMessage2 = () => {
        return (
          <div
            className="error2"
            style={{
              display: error2 ? '' : 'none',
            }}>
            <Alert key="danger"  variant="danger">
            <h1>Passwords do not Match</h1>
            </Alert>
          </div>
        );
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(name ==='' || password === '' || email === '' || pass2 === ''){
            setError(true)
            setSubmitted(false);
            setError2(false);
        }
        else if( pass2!== password){
            setError(false)
            setSubmitted(false);
            setError2(true);
        }

        else{
        try{
          const body = { name, email, password };
           const response = await fetch("http://localhost:5000/auth/Register",{
            method: "POST",
            headers: {"Content-Type": "application/json"},

            body: JSON.stringify(body)
           });
           
           const parseRes = await response.json();

           localStorage.setItem("token", parseRes.token);

           setAuth(true);
           console.log(setAuth)


           setError(false)
            setSubmitted(true);
            setError2(false);
            console.log(parseRes)



        } catch (err){
          console.error(err.message);
        }
        
      }
    }

    return ( 
      <Fragment>
        
        <div className ="content">
            
            <div className="messages">
              <center>
        {errorMessage()}
        {successMessage()}
        {errorMessage2()}
        </center>
      </div>

            <center><h1>Register</h1></center>
        <form onSubmit ={handleSubmit}>
        <center>
        
        <br></br>
      <br></br>



        <label htmlfor = " Full Name"></label>
        <input value={name} onChange={(e) => setName(e.target.value)} type = "text" placeholder ="Full Name"></input>

        <br></br>
      <br></br>

        <label htmlfor = "Email"></label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type = "email" placeholder ="Email"></input>
      <br></br>
      <br></br>

      <label htmlfor = "Password"></label>
        <input value={password} onChange={(e) => setPass(e.target.value)} type = "password" placeholder ="Password"></input>
    
   
      <br></br>
      <br></br>

      <label htmlfor = "Password2"></label>
        <input value={pass2} onChange={(e) => setPass2(e.target.value)} type = "password" placeholder ="Confirm Password"></input>
    
   
      <br></br>
      <br></br>

      <button type = "submit" onClick={handleSubmit} className="btn btn-success btn-block">Register</button>

      <br></br>
      <br></br>

      <center><a href = "/Login">Already have an account? Login Here</a> </center>
      </center>

      </form>
        <br></br>
     
        </div>
        </Fragment>
     );
}
 
export default Register;