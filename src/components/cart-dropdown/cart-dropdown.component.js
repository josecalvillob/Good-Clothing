import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

const cartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <p>cart items</p>
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default cartDropdown;
