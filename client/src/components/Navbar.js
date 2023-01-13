

const Navbar = ({setAuth, isAuthenticated}) => {


    return ( 
        <div className = "navbar">
            <h1>The Gameporium</h1>
            <div className = "links">
               <a href ="/">Home </a>
                <a href ="/AboutUs">About Us </a>
                <a href ="/Buy">Buy </a>
                <a href ="/Sell">Sell </a>
                <a href ="/Listings">Listings </a>
                <a href ="/Login">Log in </a>
                <a href ="/Dashboard">Dashboard </a>

                
            </div>
          
        </div>
     );
}
 
export default Navbar;