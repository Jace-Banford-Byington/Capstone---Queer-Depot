import React from 'react';
import BirthdayPicker from './BirthdayPicker'; // Import the BirthdayPicker component

const Form = ({
  fields,
  onSubmit,
  selectedPronoun,
  handlePronounChange,
  onInputChange,
  customPronoun,
  setCustomPronoun,
  birthdate,            
  handleDateChange,
  errors,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const dataToSend = { ...formData, birthdate }; // Combine form data and birthdate
    onSubmit(dataToSend);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index}>
          {field.name !== 'CustomPronoun' ? (
            <label className='formLabel'>{field.label}</label>
          ) : (
            selectedPronoun === 'custom' && (<>
             <label className='formLabel'>Custom Pronouns</label>
              <input
                className={field.className}
                type='text'
                name='CustomPronoun'
                value={customPronoun}
                onChange={(event) => setCustomPronoun(event.target.value)}
                required={selectedPronoun === 'custom'}
              />
            </>
             
            )
          )}

          {field.type === 'checkbox' ? (
            <input
              className={field.className}
              type='checkbox'
              name={field.name}
              checked={field.checked}
              onChange={() => onInputChange(field.name, !field.checked)}
            />
          ) : field.type === 'select' ? (
            <select
              className={field.className}
              name={field.name}
              value={selectedPronoun}
              onChange={(event) => handlePronounChange(event)}
            >
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            field.name !== 'CustomPronoun' && (
              <input
                className={field.className}
                type={field.type}
                name={field.name}
                value={field.value}
                onChange={(event) => onInputChange(field.name, event.target.value)}
              />
            )
          )}
          {errors && errors[field.name] && <p className='error'>{errors[field.name]}</p>}
        </div>
      ))}          
      <BirthdayPicker onDateChange={handleDateChange} />

      <button className='mt-3 formSubmit ' type="submit">Submit</button>
    </form>
  );
};

export default Form;