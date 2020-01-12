import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART, CLEAR_CART
} from "../actions/types";

// export const toggleCartHidden = () => ({
//   type: TOGGLE_CART_HIDDEN
// });

export const toggleCartHidden = () => dispatch => {
  dispatch({
    type: TOGGLE_CART_HIDDEN
  });
};

export const addItem = item => dispatch => {
  dispatch({
    type: ADD_ITEM,
    payload: item
  });
};

export const clearItem = item => dispatch => {
  dispatch({
    type: CLEAR_ITEM_FROM_CART,
    payload: item
  });
};

export const clearCart = () => dispatch => {
  dispatch({
    type: CLEAR_CART
  })
};
