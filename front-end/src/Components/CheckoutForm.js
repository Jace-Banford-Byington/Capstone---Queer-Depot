import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function CheckoutForm() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input type="text" className="form-control" id="firstName" />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input type="text" className="form-control" id="lastName" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" />
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <input type="text" className="form-control" id="address" />
      </div>
      <div className="mb-3">
        <label htmlFor="city" className="form-label">City</label>
        <input type="text" className="form-control" id="city" />
      </div>
      <div className="mb-3">
        <label htmlFor="zip" className="form-label">Zip Code</label>
        <input type="text" className="form-control" id="zip" />
      </div>
      <button type="submit" className="btn-primary">Submit</button>
    </form>
  );
}

export default CheckoutForm;
