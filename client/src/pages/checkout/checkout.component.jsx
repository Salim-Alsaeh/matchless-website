import React from "react";
import { connect } from "react-redux";
import { selectCartItems, selectCartTotal } from "./../../selectors/cart";
import CheckoutItem from ".././../components/checkout-item/checkout-item.component";
import StripeChekoutButton from "../../components/stripe-button/stripe-button.component";

import "./checkout.styles.scss";
import { createStructuredSelector } from "reselect";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const checkoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span> Product </span>
      </div>
      <div className="header-block">
        <span> Description </span>
      </div>
      <div className="header-block">
        <span> Quantity </span>
      </div>
      <div className="header-block">
        <span> Price </span>
      </div>
      <div className="header-block">
        <span> Remove </span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span> TOTAL: ${total} </span>
    </div>

    <StripeCheckoutButton price={total} />
  </div>
);

const mapSateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapSateToProps)(checkoutPage);
