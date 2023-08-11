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
          {field.type === 'checkbox' ? (
            <input
              type='checkbox'
              name={field.name}
              checked={field.checked}
              onChange={field.onChange}
            />
          ) : field.type === 'select' ? (
            <select
              name={field.name}
              value={field.value}
              onChange={(event) => onInputChange(field.name, event.target.value)}
            >
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              name={field.name}
              value={field.value}
              onChange={(event) => onInputChange(field.name, event.target.value)}
            />
          )}
          {errors && errors[field.name] && <p className='error'>{errors[field.name]}</p>}
        </div>
      ))}
      <button className='formSubmit' type="submit">Submit</button>
    </form>
  );
};

export default Form;
