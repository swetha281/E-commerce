
import Categories from "./components/categories.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx";
import Shop from "./components/Shop.jsx";
import { BrowserRouter ,Route, Routes} from "react-router-dom";

import ProductDetails from "./components/ProductDetails.jsx";

function App(){

  return(

    
      <BrowserRouter>
       <Routes>



        <Route path="/" element={<Home />}  />
        <Route  path="/shop" element={<Shop />} />
        <Route path="/mobile/:id" element={<ProductDetails />} />



       </Routes>
      
      </BrowserRouter>
    
    
  );
}

export default App;