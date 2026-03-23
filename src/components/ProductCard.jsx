import "./ProductCard.css";
import { useNavigate } from "react-router-dom";


function ProductCard({image, name, price}) {

   const navigate = useNavigate();

   const handleClick = () =>{

    if(name == "Mobile"){

      navigate("/shop");
    }
   }


  return (
    <div className="product-card" onClick={handleClick} style={{cursor: "pointer"}}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>₹{price}</p>
      <button>Add to Cart</button>
    </div>
  );
}



export default ProductCard;
