import React, {Fragment, useEffect, useState} from "react"
import { Navigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';

const Dashboard = ({setAuth, isAuthenticated}) => 
   {

    
    
    const [name, setName] = useState("")


    
    const logout = (e) => {
      e.preventDefault()
      localStorage.removeItem("token");
      setAuth("false")
      
    }

    async function getName(){
      try{
        
        const response = await fetch("http://localhost:5000/dashboard/", {
          method: "GET",
          headers: {token:localStorage.token}
          
        });
        const parseRes = await response.json()

        setName(parseRes.user_name)
      } catch (err){
        console.errror(err.message)
      }
    }

  
      useEffect(() => {
        getName()
      })

      if(!isAuthenticated) {
        return <Navigate to="/login" />
      }
      

   
    return ( 
        <Fragment>
          
          
            <div className = "content">
              
       
              <button className ="btn btn-danger btn-block" onClick={e => logout(e)} >Logout</button><center><h1>Dashboard </h1></center>
              <center><h2> Welcome, {name}!</h2></center> 
              
              <Table striped bordered hover size= "sm">
      <thead>
        <tr>
          <th>#</th>
          <th><center>Your Listings</center></th>
          <th><center>Liked Listings</center></th>
          <th><center>Messages</center></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td><center>Grand Theft Auto V</center></td>
          <td><center>Sonic The Hedgehog</center></td>
          <td><center>Message from: Sam</center></td>
        </tr>
        <tr>
          <td>2</td>
          <td><center>Super Mario Bros</center></td>
          <td><center>Pokemon Red</center></td>
          <td><center>Message from: Scottie Pee</center></td>
        </tr>
       
      </tbody>
      </Table>
            
            </div>
        </Fragment>
     );
    
}
 
export default Dashboard;