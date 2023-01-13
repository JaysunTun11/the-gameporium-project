import React, {Fragment} from "react"
import { Navigate } from "react-router-dom";


const Dashboard = ({setAuth, isAuthenticated}) => 
   {

    if(!isAuthenticated) {
      return <Navigate to="/login" />
  }

    return ( 
        <Fragment>
          
            <div className = "content">
              <br></br>
              <center><h1>Dashboard</h1></center>
            
            </div>
        </Fragment>
     );
}
 
export default Dashboard;