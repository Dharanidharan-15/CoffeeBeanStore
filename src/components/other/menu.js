import React from "react";
import { CoffeeList } from "./coffeelist";
import MenuItem from "../menuItems/menuItem";
import "./menu.css";


function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="coffeeList">
        {CoffeeList.map((item, key) => {
          return (
            <MenuItem
              key={key}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
