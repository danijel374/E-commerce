import React from "react";
import { connect } from "react-redux";

import "./CartDropdown.scss";

import { selectCartItems } from "../../redux/cart/cart.selectors";

import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";

function CartDropdown({ cartItems }: { cartItems: any }) {
  console.log("--------------------------------------------------------------");
  console.log(cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem: any) => (
          <CartItem key={cartItem.id} item={cartItem}></CartItem>
        ))}
      </div>

      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

const mapStateToProps = (state: any) => ({ cartItems: selectCartItems(state) });
// or
// const mapStateToProps = (state: any) => ({
//   cartItems: state.cart.cartItems,
// });

export default connect(mapStateToProps)(CartDropdown);
