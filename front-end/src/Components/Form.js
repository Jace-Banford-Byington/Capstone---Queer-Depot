import React from 'react';

const Form = ({ 
  fields, 
  onSubmit, 
  selectedPronoun, 
  handlePronounChange,
  onInputChange, 
  customPronoun,
  setCustomPronoun, 
  errors }) => {
 
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
              onChange={() => onInputChange(field.name, !field.checked)}            />
          ) : 
          
          field.type === 'select' ? (
            <select
              name={field.name}
              value={selectedPronoun} // Use the selectedPronoun state as the value
              onChange={(event) => handlePronounChange(event)}
             >
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : 
          
          (
            <input
              type={field.type}
              name={field.name}
              value={field.value}
              onChange={(event) => onInputChange(field.name, event.target.value)}
              />
          )}


{selectedPronoun === 'custom' && field.name === 'CustomPronoun' && (
  <input
    type="text"
    name="CustomPronoun" // Use the field name directly here
    value={customPronoun} // Use the customPronoun state
    onChange={(event) => setCustomPronoun(event.target.value)}
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
