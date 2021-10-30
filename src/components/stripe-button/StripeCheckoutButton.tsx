import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }: { price: any }) => {
  const priceForStripe = price * 100;
  const PublishableKey =
    "pk_test_51JqOb2Jv6f1rRQOJ3ZAz8B1w2T7jgSuBce4MhXwWGOkxGmO84FPVCgqhPsRJyc1txUuN4yesDySI0rSgV9LTu3y700s8L19Bnk";
  const onToken = (token: any) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="E-COMMERCE"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={PublishableKey}
    />
  );
};

export default StripeCheckoutButton;
