import React, {useState } from "react";

function Item({ name, category }) {

  const [cart, setCart] = useState(false)

  function handleClick() {
    setCart(!inCart, !removeFromCart)
  }

  const inCart = cart ? "in-cart" : ""

  const removeFromCart = cart ? "Remove From Cart" : "Add To Cart"

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{removeFromCart}</button>
    </li>
  );
}

export default Item;
