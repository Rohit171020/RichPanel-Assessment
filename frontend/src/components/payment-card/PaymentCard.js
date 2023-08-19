import React, { useContext, useState, useEffect } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../../utils/AppContext';
import './custom-payment-card.css'; // Updated CSS file

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: 'grey',
      color: 'black',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': { color: 'grey' },
      '::placeholder': { color: 'grey' },
    },
    invalid: {
      iconColor: 'red',
      color: 'red',
    },
  },
};

export default function CustomPaymentCard() { // Updated component name
  const [address, setAddress] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const { user, showAlert, addSubscriptionDetialsToDatabase, baseUrl } = useContext(AppContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { state } = useLocation();

  const startSubscription = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setLoading(true);
    // ... rest of the code remains the same
  };

  return (
    <div className="custom-payment__container"> {/* Updated class name */}
      <div className="custom-payment__info"> {/* Updated class name */}
        <h2 className="custom-payment__title">Payment Details</h2> {/* Updated class name */}
        <small className="custom-payment__description">Provide card information below</small> {/* Updated class name */}
        <form onSubmit={startSubscription} className="custom-payment__form"> {/* Updated class name */}
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} className="custom-card-element" /> {/* Updated class name */}
            </div>
          </fieldset>
          <input
            style={{
              // ... inline styles remain the same
            }}
            onChange={(e) => setAddress(e.currentTarget.value)}
            required
            placeholder="Billing Address"
            className="custom-billing-address-input" {/* Updated class name */}
          />

          <input
            disabled={loading}
            value={loading ? 'Transaction in Progress....' : 'Confirm Payment'}
            className="custom-payment-button" {/* Updated class name */}
            type="submit"
          />
        </form>
      </div>

      <div className="custom-order__info"> {/* Updated class name */}
        <h3 className="custom-order__title">Order Summary</h3> {/* Updated class name */}
        <ul className="custom-order__list"> {/* Updated class name */}
          <li>
            Plan Name <span className="custom-incapital">{state && state.plan}</span> {/* Updated class name */}
          </li>
          <hr />
          <li>
            Billing Cycle <span className="custom-incapital">{state && state.period}</span> {/* Updated class name */}
          </li>
          <hr />
          <li>
            Plan Price{' '}
            <span>
              &#8377; {state && (state.period === 'month' ? state.planInfo['Monthly-Price'] + '/mo' : state.planInfo['Yearly-Price'] + '/yr')}
            </span>
          </li>
          <hr />
        </ul>
      </div>
    </div>
  );
}
