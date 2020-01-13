import React from "react";
// stripe lib
import StripeCheckout from "react-stripe-checkout";
// logo
import pijama from "../../assets/pijama.svg";

//redux related
import { connect } from "react-redux";
// actions
import { clearCart } from "../../actions/cart";
import { setAlert } from '../../actions/alert';

import axios from 'axios';
import { createStructuredSelector } from "reselect";
// selectors
import { selectAuth } from "../../selectors/auth";
import { selectCurrentUser } from "../../selectors/user";

import './stripe-button.styles.scss'

const StripeCheckoutButton = ({ price, clearCart, auth: { isAuthenticated, loading }, setAlert }) => {
  const priceForStripe = price * 100;
  const publisherKey = "pk_test_lMMR1Hrbrljxio3eeiVq4hbK00NqIRhyVh";

  const onToken = async token => {
    try {
      const res = await axios({
        url: 'http://localhost:5002/api/v1/payment/',
        method: 'post',
        data: {
          amount: priceForStripe,
          token
        }
      });

      clearCart()
      setAlert("Payment Successful", "success")

    } catch (e) {
      console.log(e)
      setAlert("There was an issue with your payment", "danger")
    }

    console.log(token);
  };

  return (
    // checking if the user loged in we will display the payment button otherwise we will display a worning message 
    isAuthenticated ? (<StripeCheckout
      label="Pay Now"
      name="Matchless Clothing Ltd."
      billingAddress
      shippingAddress
      image={ `${pijama}` }
      description={ `Your total is $${price}` }
      amount={ priceForStripe }
      panelLabel="Pay Now"
      token={ onToken }
      stripeKey={ publisherKey }
    />) : <div className="test-warning">
        *Please log in order to proceed for payment*
      </div>
  );
};

const mapStateToProps = createStructuredSelector({
  auth: selectAuth,
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps, { clearCart, setAlert })(StripeCheckoutButton);
