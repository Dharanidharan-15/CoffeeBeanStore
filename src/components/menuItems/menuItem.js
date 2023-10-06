import React from "react";
import { useNavigate } from "react-router-dom";

function MenuItem({ image, name, price }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div className="menuItem" onClick={handleClick}>
      <img src={image} alt="" style={{ height: 240 }} />
      <h1>{name}</h1>
      <p>${price}</p>
    </div>
  );
}

export default MenuItem;
