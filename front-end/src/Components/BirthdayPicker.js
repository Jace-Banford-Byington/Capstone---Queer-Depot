import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css';
import $ from 'jquery'; // Import jQuery
import 'bootstrap-datepicker'; // Import Bootstrap Datepicker


const BirthdayPicker = ({ onDateChange }) => {
  const [birthdate, setBirthdate] = useState('');

  useEffect(() => {
    const datepicker = $('#birthday-picker'); // Use jQuery to select the input field
    datepicker.datepicker({
      format: 'mm/dd/yyyy',
      autoclose: true,
    });

    // Update the state with the selected date when Datepicker value changes
    datepicker.on('change', (event) => {
      setBirthdate(event.target.value);
      onDateChange(event.target.value);
    });

    return () => {
      datepicker.datepicker('destroy');
      datepicker.off('change');
    };
  }, [onDateChange]);

  return (
    <div className="form-group">
      <label htmlFor="birthday-picker">Select Your Birthdate:</label>
      <input
        type="text"
        id="birthday-picker"
        className="form-control"
        value={birthdate}
        placeholder="MM/DD/YYYY"
        readOnly
      />
    </div>
  );
};

export default BirthdayPicker;
