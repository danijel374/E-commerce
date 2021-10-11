import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";

import "./Header.scss";

import CartDropdown from "../cart-dropdown/CartDropdown";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/CartIcon";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";

function Header({
  currentUser,
  hidden,
}: {
  currentUser: any;
  hidden: boolean;
}) {
  console.log("Header props", currentUser);
  return (
    <header className="header">
      <NavLink to="/">
        <Logo className="logo" />
      </NavLink>
      <div className="options">
        <div className="option">
          <NavLink className="option" to="/shop" activeClassName="selected">
            SHOP
          </NavLink>
        </div>
        <div className="option">
          <NavLink className="option" to="/contact" activeClassName="selected">
            CONTACT
          </NavLink>
        </div>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <NavLink className="option" to="signin">
            SIGN IN
          </NavLink>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </header>
  );
}

// const mapStateToProps = (state: any) => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state),
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
