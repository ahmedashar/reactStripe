import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import InjectedCheckoutForm from "./components/CheckoutForm"

const stripePromise = loadStripe("pk_test_51NcVn9JYpq3pSdliviy3CU7AZ4hpgGczrSbysNSRqlw1FbZ6WM6PhfKF5q9SZX8jKCzk0wnrUcaDtfrpiZGkT0AG00FqyqcxKW");

const App = () => {
  return (
    <div className="App">
      <div className="product">
        <img
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          alt="laptop"
          style={{ width: "100%", height: "auto" }}
        />
        
        <div>
          <Elements stripe={stripePromise}>
            <InjectedCheckoutForm/>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default App;