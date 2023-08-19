import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentCard from '../payment-card/PaymentCard';

const PUBLIC_KEY = "pk_test_51Ng2MSSEmpoDyKWM2BxmouL6cikMOoK6uPshdHZcCCoJsbpP3Up4SfqO8AOwc67SpLQR76s5IHF4T4fysxU9aRQC007cEnKnoF"

const stripePromise = loadStripe(PUBLIC_KEY);


export default function StripeContainer() {

  return (
    <Elements stripe={stripePromise}>
      <PaymentCard />
    </Elements>
  )
}
