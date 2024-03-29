import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDoc } from "@firebase/firestore";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createUserProfileDocument } from "./firebase/firebase.utils";

import "./App.scss";

import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import SingInAndSingUp from "./pages/sign-in-and-sing-up/SingInAndSingUp";
import CheckoutPage from "./pages/checkout/CheckoutPage";

const auth = getAuth();

// type setCurrentUser = {};
// test

interface MyProps {
  children: JSX.Element | JSX.Element[];
  setCurrentUser: typeof setCurrentUser;
  currentUser: any;
}

class App extends React.Component<MyProps, {}> {
  unsubscribeFromAuth = () => {};
  componentDidMount() {
    console.log("now works ssh setup ok?");
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userDocRef = await createUserProfileDocument(userAuth);
        setCurrentUser(userAuth);

        const userDocSnap = await getDoc(userDocRef);

        setCurrentUser({
          id: userDocSnap.id,
          ...userDocSnap.data(),
        });

        // this.setState(
        //   {
        //     currentUser: {
        //       id: userDocSnap.id,
        //       ...userDocSnap.data(),
        //     },
        //   },
        //   () => {}
        // );
      } else {
        // User is signed out
        // userAuth = null
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    // https://stackoverflow.com/questions/42762443/how-can-i-unsubscribe-to-onauthstatechanged?noredirect=1&lq=1
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() => {
              return this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SingInAndSingUp />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

// const mapStateToProps = ({ user }: { user: any }) => ({
//   currentUser: user.currentUser,
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user)),
});

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(App);
