import ProductCard from "./ProductCard";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Categories from "./categories";
import { products } from "../data/product";


import "./Home.css";


function Home() {
  

  return (


     <div>

        <Navbar />
        <Banner />
        <Categories />



    <div className="product-container">
      {products.map((item) => (
        <ProductCard key={item.id} {...item}/>


        
      ))}
    </div>

    </div>


  );
}



 export default Home;