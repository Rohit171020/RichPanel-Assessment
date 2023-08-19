import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './custom-plancard.css'; 
import { AppContext } from '../../utils/AppContext';


export default function CustomPlanCard({ type, plan, period, amount, subId }) { // Updated component name

  const { cancelSubscription } = useContext(AppContext);
  const navigator = useNavigate();

  let date = new Date().toLocaleDateString();
  // console.log(date);

  return (
    <div className='custom-card custom-plan-card'> {/* Updated class names */}
      <div className="custom-card-header"> {/* Updated class name */}
        <div className='custom-header-left'> {/* Updated class name */}
          <h3>Your Current Subscription</h3>
          {
            type === "active" ? <span className='custom-active-badge'>Active</span> // Updated class name
              : <span className='custom-cancel-badge'>Cancelled</span> // Updated class name
          }

        </div>

        {
          type === "active" ? <button onClick={() => {
            cancelSubscription(subId)
          }}> Cancel Subscription</button> : null
        }

      </div>

      <p className='custom-plan-name'>{plan}</p>
      {
        plan === "mobile" ? <p className='custom-device-select'>Phone + Tablet</p> : <p>All Devices</p>
      }

      <h1>&#8377; {amount}/<sub style={{ fontWeight: 'normal' }}>{period}</sub></h1>

      <button className='custom-button custom-secondary-button' id='custom-pbtn' onClick={() => {
        navigator("/plans");
      }}>

        {type === "active" ? "Change Plan" : "Choose Plan"}</button>

      {
        type === "active" ?
          (<p>Your subscription is active and will auto-renew.</p>)
          :
          <p>Your subscription was cancelled, access ends on {date}</p>
      }
    </div>
  )
}
