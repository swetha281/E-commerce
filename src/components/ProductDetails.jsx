import React from "react";
import { useParams } from "react-router-dom";
import m7 from "../assets/mobile7.jpg" ;
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "iPhone 14 Pro Max",
      price: "₹1,39,999",
      img: m7,
      desc: "Apple iPhone 14 Pro Max (128GB) - Deep Purple. 48MP Camera, A16 Bionic Chip, Super Retina XDR Display.",
      rating: "4.5",
      reviews: "25,000"
    }
  ];

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="details-container">
      
      {/* LEFT IMAGE */}
      <div className="image-section">
        <img src={product.img} alt={product.name} />
      </div>

      {/* RIGHT CONTENT */}
      <div className="content-section">
        <h1>{product.name}</h1>

        <p className="rating">
          ⭐⭐ {product.rating} ({product.reviews} Ratings)
        </p>

        <h2 className="price">{product.price}</h2>

        <p className="desc">{product.desc}</p>

        <div className="buttons">
          <button className="cart-btn">Add to Cart</button>
          <button className="buy-btn">Buy Now</button>
        </div>
      </div>

    </div>
  );
}

export default ProductDetails;
