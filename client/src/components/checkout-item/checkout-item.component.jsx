import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import { clearItem } from "../../actions/cart";
const CheckoutItem = ({ cartItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl[0]} alt="item" />
      </div>
      <span className="name">{name} </span>
      <span className="quantity"> {quantity} </span>
      <span className="price"> {price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

export default connect(null, { clearItem })(CheckoutItem);
