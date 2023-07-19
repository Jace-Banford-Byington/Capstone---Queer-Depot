import React from 'react';

const Form = ({ fields, onSubmit, onInputChange, errors }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    onSubmit(event, data);
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
            required
          />
          {errors && errors[field.name] && <p className='error'>{errors[field.name]}</p>}
        </div>
      ))}
      <button className='formSubmit' type="submit">Submit</button>
    </form>
  );
};

export default Form;
