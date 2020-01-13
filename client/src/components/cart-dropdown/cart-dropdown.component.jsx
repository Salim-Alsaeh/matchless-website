// react
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// React Component 
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
// importing actions and selectors 
import { selectCartItems } from "../../selectors/cart";
import { toggleCartHidden } from ".././../actions/cart";
// importing styles 
import "./cart-dropdown.styles.scss";

const CartDropDown = ({ cartItems, history, dispatch }) => {
  console.log(cartItems, "items");
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        { cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={ cartItem.id } item={ cartItem } />
          ))
        ) : (
            <span className="empty-message"> Your cart is empty </span>
          ) }
      </div>
      <CustomButton
        onClick={ () => {
          dispatch(toggleCartHidden());
          history.push("/checkout");
        } }
      >
        CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
