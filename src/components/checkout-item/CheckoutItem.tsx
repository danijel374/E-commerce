import React from "react";
import "./CheckoutItem.scss";
console.log("test wsl");
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({
  cartItem,
  clearItem,
  addItem,
  removeItem,
}: {
  cartItem: any;
  clearItem: any;
  addItem: any;
  removeItem: any;
}) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        {" "}
        <div
          className="arrow"
          onClick={() => {
            removeItem(cartItem);
          }}
        >
          &#10094;
        </div>{" "}
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => {
            addItem(cartItem);
          }}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => {
          clearItem(cartItem);
        }}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  clearItem: (item: any) => dispatch(clearItemFromCart(item)),
  addItem: (item: any) => dispatch(addItem(item)),
  removeItem: (item: any) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
