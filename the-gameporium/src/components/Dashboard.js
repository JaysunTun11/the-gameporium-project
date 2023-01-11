import React, {Fragment} from "react"
import { Navigate } from "react-router-dom";


const Dashboard = ({setAuth}) => 
   {

    if (!setAuth) {
        // user is not authenticated
        return <Navigate to="/" />;
      }

    return ( 
        <Fragment>
            <div className = "content">Dashboard</div>
        </Fragment>
     );
}
 
export default Dashboard;