import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./Header.scss";

import { auth } from "../../firebase/firebase.utils";

function Header({ currentUser }: { currentUser: any }) {
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
      </div>
    </header>
  );
}

const mapStateToProps = (state: any) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
