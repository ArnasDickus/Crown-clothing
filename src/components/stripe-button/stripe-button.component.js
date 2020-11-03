import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_6JUsZd5ap1WivNpJ40wOYhsG00QNWzhMo2'

  const onToken = token => {
        alert('Payment Successfull');
    }

    return (
        <StripeCheckout
            label="Pay Now "
            name="Crown Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey} />
    )
}

export default StripeCheckoutButton;
