import React from 'react';

const Form = ({ fields, onSubmit, onInputChange }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index}>
          <label className='formLabel'>{field.label}</label>
          <input
            className='formInput'
            type={field.type}
            name={field.name}
            onChange={onInputChange}
            defaultValue={field.defaultValue}
            required
          />
        </div>
      ))}
      <button className='formSubmit' type="submit">Submit</button>
    </form>
  );
};

export default Form;
