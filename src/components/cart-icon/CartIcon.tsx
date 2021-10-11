import "./CartIcon.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = ({
  toggleCartHidden,
  itemCount,
}: {
  toggleCartHidden: () => void;
  itemCount: number;
}) => {
  console.log("DIDID I RENDER AGAINSDIASNDS!!!!!!!!!");
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  console.log(
    "this is action = dispatch(toggleCartHidden())",
    dispatch(toggleCartHidden())
  );
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden()),
  };
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});
// const mapStateToProps = (state: any) => {
//   console.log("I am being called ");
//   return {
//     itemCount: selectCartItemsCount(state),
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
