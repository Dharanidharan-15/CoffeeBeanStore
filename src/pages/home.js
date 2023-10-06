import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="headContainer">
        <h1>Indigo Coffee</h1>
        <p>
          <i>its coffee time!</i>
        </p>
        <Link to="/shop">
          <button>Shop Now!</button>
        </Link>
      </div>
    </div>
  );
}
//style={{ background : `url(${BannerImage})}}`
export default Home;
