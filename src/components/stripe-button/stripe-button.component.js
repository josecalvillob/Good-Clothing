import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  // Need price in cents for Stripe
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_X8Xug1sPc62qxXdpChOOspWA00q24WYnea";

  const onToken = token => {
    console.log(token);
    alert("Payment Success!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Good Clothing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
