import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css';
import $ from 'jquery'; // Import jQuery
import 'bootstrap-datepicker'; // Import Bootstrap Datepicker

const BirthdayPicker = ({ onDateChange }) => {
  useEffect(() => {
    const datepicker = $('#birthday-picker');
    datepicker.datepicker({
      format: 'mm/dd/yyyy',
      autoclose: true,
    });

    datepicker.on('change', (event) => {
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
        type="text" // Use the date input type
        id="birthday-picker"
        className="form-control"
        placeholder="MM/DD/YYYY"
      />
    </div>
  );
};

export default BirthdayPicker;
