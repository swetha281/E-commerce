
import "./Banner.css";
import makeup from "../assets/makeup1.jpg";


function Banner() {
  return (
    <div className="banner">
      <div className="banner-left">
        <h1>Big Sale is Live 🔥</h1>
        <p>Up to 70% OFF on all products</p>
        <button>Shop Now</button>
      </div>

      <div className="banner-right">
        <img
          src={makeup}
          alt="product"
        />
      </div>
    </div>
  );
}

export default Banner;