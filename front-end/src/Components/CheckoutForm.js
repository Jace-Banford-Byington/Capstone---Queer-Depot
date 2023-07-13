import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardInfo from './CardInfo'

function CheckoutForm() {

    const [showCard, setShowCard] = useState(false)
    const [submitClicked, setSubmitClicked] = useState(false);

    const handlesubmit =(e) => {
        e.preventDefault();
        setShowCard(true)
        setSubmitClicked(true)
    }


  return (
    <>
    <form className='checkoutform'>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input type="text" className="form-control" id="firstName" placeholder='First' required/>
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input type="text" className="form-control" id="lastName" placeholder='Last Name' required />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" placeholder='Email' required/>
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <input type="text" className="form-control" id="address" placeholder='Address' required/>
      </div>
      <div className="mb-3">
        <label htmlFor="city" className="form-label">City</label>
        <input type="text" className="form-control" id="city"  placeholder='City' required/>
      </div>
      <div className="mb-3">
        <label htmlFor="zip" className="form-label">Zip Code</label>
        <input type="text" pattern="\d{5}" maxLength={5} className="form-control" id="zip" placeholder='Zipcode' required/>
      </div> 
      {!showCard && (
            <button type="submit" onClick={handlesubmit} className="btn-primary">Submit</button>

      )}
      
    </form>
{showCard && <CardInfo /> }
   
</>
  );
}

export default CheckoutForm;
