import React from "react";
import { connect } from "react-redux";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../selectors/cart";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from ".././../actions/cart";

const CartDropDown = ({ cartItems, history, dispatch }) => {
  console.log(cartItems, "items");
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message"> Your cart is empty </span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          dispatch(toggleCartHidden());
          history.push("/checkout");
        }}
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
