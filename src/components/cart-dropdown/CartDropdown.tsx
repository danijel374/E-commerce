import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";

import "./CartDropdown.scss";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { selectCartItems } from "../../redux/cart/cart.selectors";

import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";
function CartDropdown({
  cartItems,
  history,
  dispatch,
}: {
  cartItems: any[];
  history: any;
  dispatch: any;
}) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem: any) => (
            <CartItem key={cartItem.id} item={cartItem}></CartItem>
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>

      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

// const mapStateToProps = (state: any) => ({ cartItems: selectCartItems(state) });
// or
// const mapStateToProps = (state: any) => ({
//   cartItems: state.cart.cartItems,
// });

export default withRouter(connect(mapStateToProps)(CartDropdown));
