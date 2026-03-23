 import "./Navbar.css";
 import logo from "../assets/logo.jpg";
 
 
 
 
 function Navbar(){

    return (

         <div className="container">
        <div className="header">Flipkart
        </div>


         <input type="text" placeholder="Search for Products ,Brands and More..." className="search" />

         <div className="nav-links">

          <span>Login</span>
          <span>Cart</span>
         </div>

       

        
        </div>     );
}


export default Navbar;