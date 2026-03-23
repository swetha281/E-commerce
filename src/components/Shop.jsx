 import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import "./shop.css";


// images import

import m1 from "../assets/mobile1.jpg" ;
import m2 from "../assets/mobile2.jpg" ;
import m3 from "../assets/mobile3.jpg" ;
import m4 from "../assets/mobile4.jpg" ;
import m5 from "../assets/mobile5.jpg" ;
import m6 from  "../assets/mobile6.jpg";
import m7 from "../assets/mobile7.jpg" ;
import m8 from "../assets/mobile8.jpg" ;
import m9 from "../assets/mobile9.jpg" ;
import m10 from "../assets/mobile10.jpg";


 


const products = [
  { id: 1, name: "Mobile 1", price: "₹15000", img: m1 },
  { id: 2, name: "Mobile 2", price: "₹20000", img: m2 },
  { id: 3, name: "Mobile 3", price: "₹18000", img: m3 },
  { id: 4, name: "Mobile 4", price: "₹22000", img: m4 },
  { id: 5, name: "Mobile 5", price: "₹25000", img: m5 },
  { id: 6, name: "Mobile 6", price: "₹30000", img: m6 },
  { id: 6, name: "Mobile 7", price: "₹30000", img: m7 },
  { id: 6, name: "Mobile 8", price: "₹30000", img: m8 },
  { id: 6, name: "Mobile 9", price: "₹30000", img: m9 },
  { id: 6, name: "Mobile 10", price: "₹30000", img: m10 },
];

function Shop() {

   const navigate = useNavigate();

  
  return (

    

    
    <div className="shop-container">
      
      {/* LEFT FILTER */}
      <div className="filters">
        <h3>Filters</h3>

        <div className="filter-section">
           <h4>Category</h4>
           <label><input type="checkbox" />Smartphones</label>
            <label><input type="checkbox" />Feature Phones</label>
        </div>

        <div className="filter-section">
          <h4>Price</h4>
          <label><input type="checkbox" />Rs.10,000</label>
          <label><input type="checkbox" />Rs.10,000 - Rs.20,000</label>
          <label><input type="checkbox" />Rs.20,000 - Rs.30,000</label>
          <label><input type="checkbox" />Rs.30,000</label>

          </div>

          <div className="filter-section">
          <h4>Brand</h4>
          <label><input type="checkbox" />Samsung</label>
          <label><input type="checkbox" />Apple</label>
          <label><input type="checkbox" />Realme</label>
         

          </div>

          



      
       </div>
       <div className="products-size">

     
       <div className="products-area">
        <h2>SmartPhones</h2> 

       
       </div> 




       

      {/* RIGHT PRODUCTS */}
       <div className="products-section">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <div  className="image-box"  onClick={()=>  navigate(`/mobile/${item.id}`)}>
            <img src={item.img} alt={item.name} />
            </div>
             <div className="name-size">
            <h4>{item.name}</h4>
            </div> 
             <p>{item.price}</p>
            <button>Add to Cart</button> 
          </div>

          ) )}
  
       </div> 

       
   
    </div>

    </div>

        
  );
}

export default Shop;









