import React, { useState } from "react";
import { ElementsConsumer, CardElement, useStripe, useElements, CardNumberElement } from "@stripe/react-stripe-js";
import CardSection from "../CardSection";


function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [metaData, setMetaData] = useState({
    productName: "Headphone Pro",
    productPrice:"$199"
  });
 
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!stripe || !elements) {
      return;
    }
  
    // const card = elements.getElement(CardElement);
    const card = elements.getElement(CardNumberElement);
    const result = await stripe.createToken(card);
  
    if (result.error) {
      console.log(result.error.message);
    } else {
      console.log(result.token , "BEFORE");
      const tokenResult = result.token;
      // const metaData = {
      //   productName : "Headphone Pro",
      //   productPrice : "$199"        
      // }
      const FinalResult = {...tokenResult, metaData};
      
      console.log(FinalResult ,"AFTER");
      // The token can be passed to your backend API
    }
  };
  

  return (
    <div>
      <div className="product-info">
        <h3 className="product-title">{metaData.productName}</h3>
        <h4 className="product-price">{metaData.productPrice}</h4>
      </div>
      <form onSubmit={handleSubmit}>
        <CardSection />
        <button disabled={!stripe} className="btn-pay">
          Buy Now
        </button>
      </form>
    </div>
  );
}

export default function InjectedCheckoutForm() {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CheckoutForm stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
}
