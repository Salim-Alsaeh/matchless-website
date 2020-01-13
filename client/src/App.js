import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import checkoutPage from "./pages/checkout/checkout.component";
import SearchResult from "./pages/search-result-page/search-result.component";
//import "assets/scss/material-kit-react.scss";

import "./App.css";
import Alert from "./components/layout/Alert";

// Firebase Auth 
import { auth } from './utils/firebase'

//Redux
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

import HomePage from "./pages/homepage/homepage.component";
import SectionPage from "./pages/section/section.component";
import Header from "./components/header/header.component";
import { BrowserRouter as Router } from "react-router-dom";

//import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import SignUp from "./components/sign-up/sign-up-component";
import SignIn from "./components/sign-in/sign-in.component";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";
import { loadSections } from "./actions/directory";
import { loadSectionsData } from "./actions/section";
import { loginWithGoogle } from './actions/auth'


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {


  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(loadSections());
    store.dispatch(loadSectionsData());


  }, []);
  return (
    <Provider store={ store }>
      <PersistGate persistor={ persistor }>
        <Router>
          <div>
            <Header />
            <Alert />
            <Switch>
              <Route exact path="/" component={ HomePage } />
              <Route path="/section" component={ SectionPage } />
              <Route exact path="/signin" component={ SignIn } />
              <Route exact path="/signup" component={ SignUp } />
              <Route exact path="/checkout" component={ checkoutPage } />
              <Route exact path="/search-result" component={ SearchResult } />
            </Switch>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
