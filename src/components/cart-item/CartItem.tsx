import React from "react";
import "./CartItem.scss";

const CartItem = ({
  item: { imageUrl, price, name, quantity },
}: {
  item: { imageUrl: string; price: number; name: string; quantity: number };
}) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} $ {price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;