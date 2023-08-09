import React from "react";
import { CardCvcElement, CardElement, CardExpiryElement, CardNumberElement, useElements } from "@stripe/react-stripe-js";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#303238",
      fontSize: "16px",
      fontFamily: "sans-serif",
      fontSmoothing: "antialiased",
      "::placeholder": {
        color: "#CFD7DF"
      }
    },
    invalid: {
      color: "#e5424d",
      ":focus": {
        color: "#303238"
      }
    }
  }
};

function CardSection() {
  
  return (
    // <label>
    //    Card details
    //   <CardElement options={CARD_ELEMENT_OPTIONS} />
    // </label>
    <div>
    <label>
    &nbsp; <b>Card number</b>
      <CardNumberElement options={CARD_ELEMENT_OPTIONS} />
    </label>
    <label>
    &nbsp; <b>Expiry date</b>
      <CardExpiryElement options={CARD_ELEMENT_OPTIONS} />
    </label>
    <label>
    &nbsp; <b>CVC</b>
      <CardCvcElement options={CARD_ELEMENT_OPTIONS} />
    </label>
  </div>
   
  );
}


export default CardSection;