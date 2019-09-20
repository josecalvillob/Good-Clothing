import { createSelector } from "reselect";

//input selector
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  //takes in 2 arguments. Firsts takes in a collection(array) of input selectors
  [selectCart],
  // second thing it takes is a function that returns the value we want from the selector
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartHidden = createSelector(
  selectCart,
  cart => cart.hidden
);

export const selectCartTotal = createSelector(
  selectCartItems,
  cartItems =>
    cartItems.reduce(
      (accumulatedTotal, cartItem) =>
        accumulatedTotal + cartItem.quantity * cartItem.price,
      0
    )
);
