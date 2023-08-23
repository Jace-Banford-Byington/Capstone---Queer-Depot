import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardInfo from './CardInfo';

function CheckoutForm() {
  const [showCard, setShowCard] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [amount, setAmount] = useState(10);
  const [custom, setCustom] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCard(true);
    setSubmitClicked(true);
  };

  const handleAmountChange = (event) => {
    const selectedAmount = event.target.value;
    if (selectedAmount === 'custom') {
      setAmount('custom');
    } else {
      setAmount(Number(event.target.value));
    }
    console.log('$' + amount)
  };

  const handleCustomAmount = (event) => {
    setCustom('$'+ event.target.value);
    console.log('$' + custom)
  };

  return (
    <>
      <form className='checkoutform'>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input type="text" className="form-control" id="firstName" placeholder='First Name' required/>
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input type="text" className="form-control" id="lastName" placeholder='Last Name' required />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" placeholder='Email Address' required/>
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
            <button type="submit" onClick={handleSubmit} className="btn-primary">Submit</button>

      )}
      
    </form>

      <label>Donation Amount: </label>
      <select 
        className='mb-3 donation'
        type='dropdown'
        value={amount}
        onChange={handleAmountChange}
      >
        <option value={10}>$10</option>
        <option value={15}>$15</option>
        <option value={20}>$20</option>
        <option value={25}>$25</option>
        <option value='custom'>Custom</option>
      </select>

      {amount === 'custom' && (
        <div>
        <input 
            className='dropdown mb-3'
            type='number'
            placeholder='Enter Amount'
            value={custom}
            onChange={handleCustomAmount}
        />

        </div>
        
      )}

      {showCard && <CardInfo />}
    </>
  );
}

export default CheckoutForm;
