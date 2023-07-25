import React, {useState}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CardInformationForm() {

    const [cardNumber, setCardNumber] = useState('');
  const [cardType, setCardType] = useState('');


  //this is found from the internet to not have to figure out the logic
  const handleCardNumberChange = (event) => {
    const cardNumber = event.target.value.replace(/\s/g, '');
    let newCardType = '';

    if (cardNumber.startsWith('4')) {
      newCardType = 'Visa';
    } else if (cardNumber.startsWith('5')) {
      newCardType = 'Mastercard';
    } else if (cardNumber.startsWith('3')) {
      if (cardNumber.charAt(1) === '4' || cardNumber.charAt(1) === '7') {
        newCardType = 'American Express';
      }
    } else if (cardNumber.startsWith('6')) {
      if (cardNumber.slice(0, 4) === '6011' || (cardNumber.charAt(1) === '4' && cardNumber.length >= 16)) {
        newCardType = 'Discover';
      }
    }

    setCardType(newCardType);
    setCardNumber(cardNumber); // Update the cardNumber state
  };


  //choose how much can donante 
  //omplement automaticly inputs the slashes for expire data 
    //add validation for the expriation date (Month can not be larger than 12 else give a little error saying not that many months in the year )
  //Add the send feature that takes the selected amount to the database and add it to the donation with the provided Name from the checkout form where it will update the counter for the amount donated. under neith have who last donated and how much 
  //when you click on that donation field takes you to donation page 

  return (
    <form className='CardInfo'>
      <div >
  <div className="mb-3">
      <label htmlFor="cardNumber" className="form-label">Card Number</label>
        <input type="text" maxLength={16} className="form-control" id="cardNumber" placeholder='Card Number' value={cardNumber} onChange={handleCardNumberChange} required/>
        {cardType && 
        <p>Card Type: {cardType}</p>
        }
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="expiration" className="form-label">Expiration Date</label>
          <input type="text" maxLength={10} pattern='^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/\d{4}$' className="form-control" id="expiration" placeholder='MM/YYYY' required />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="cvv" className="form-label">CVV</label>
          <input type="text" pattern="\d{3,4}" maxLength={4}  className="form-control" id="cvv" placeholder='CVV' required/>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="cardHolder" className="form-label">Cardholder Name</label>
        <input type="text" className="form-control" id="cardHolder" placeholder='Cardholder Name' required/>
      </div>
      </div>
    
      <button type="submit" className="btn-primary">Submit</button>
    </form>
  );
}

export default CardInformationForm;
