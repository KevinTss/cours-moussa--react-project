import {
  Elements,
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import NavMenu from "../components/layouts/NavMenu";
import API from "../api";

const FormWrapper = styled.div`
  max-width: 600px;
  margin: auto;
`;
// cus_JAHHebk2HfReFi //  customer DB
// cus_J9oQQI4r6V2sHX //  customer stripe

// api/subsidiaries/{subsidiary}/intent_payment
// pk_test_51IX1HwK06oJQxVlkcFrsobpkCryGCmPXx63WwOliQjfRgs195kZr8JhjhEIrKWr66m7rHJqLaMRnNHHPciRN6qUG00iPbUD9Oy
// sk_test_51IX1HwK06oJQxVlkUqBRqEjCYn2Z2oY78Mk5T4NFN572Bu2a2me7DKjrl976MgKYZ9tHnnybjzTc79g2JibadmVF00Zj1W71ZE

const COMPANY_ID = 5;
const PRODUCT_ID = 5;

const PaymentPage = (props) => {
  const stripePromise = loadStripe(
    "pk_test_51IX1HwK06oJQxVlkcFrsobpkCryGCmPXx63WwOliQjfRgs195kZr8JhjhEIrKWr66m7rHJqLaMRnNHHPciRN6qUG00iPbUD9Oy"
  );

  return (
    <div>
      <NavMenu />
      <main>
        <h1>{props.title}</h1>
        <Elements stripe={stripePromise}>
          <Form />
        </Elements>
      </main>
    </div>
  );
};

export default PaymentPage;

const Form = () => {
  const [clientSecret, setClientSecret] = useState(
    "pi_1IZKm3K06oJQxVlkp74FYkJN_secret_PnIbRmhNWHgCgbFqbbRJEoBBB"
  );
  const stripe = useStripe();
  const elements = useElements();

  const payWithCard = (e) => {
    e.preventDefault();
    // loading(true);
    stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then((result) => {
        if (result.error) {
          // Show error to your customer
          // showError(result.error.message);
          console.log("err", result.error.message);
        } else {
          // The payment succeeded!
          // orderComplete(result.paymentIntent.id);
          console.log("success", result);
        }
      });
  };

  return (
    <form onSubmit={payWithCard}>
      <FormWrapper>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button type="submit">Submit</button>
      </FormWrapper>
    </form>
  );
};
