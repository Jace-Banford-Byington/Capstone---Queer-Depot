import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CardInformationForm() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="cardNumber" className="form-label">Card Number</label>
        <input type="text" className="form-control" id="cardNumber" />
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="expiration" className="form-label">Expiration Date</label>
          <input type="text" className="form-control" id="expiration" />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="cvv" className="form-label">CVV</label>
          <input type="text" className="form-control" id="cvv" />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="cardHolder" className="form-label">Cardholder Name</label>
        <input type="text" className="form-control" id="cardHolder" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default CardInformationForm;
