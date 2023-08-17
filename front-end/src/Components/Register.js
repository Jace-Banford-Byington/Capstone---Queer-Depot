import React,  { useEffect, useState } from 'react'
import  Form from './Form'

const Register = () => {

  const url = "http://localhost:3300/register"
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({})


  const handleFormSubmit = (event) => {
    event.preventDefault();
        console.log("Form Data",formData)
        //send to the register method in api
      
        fetch( url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then(resp => resp.json())
          .then(data => {
            
          })
          .catch(error => {
            // Handle any errors that occur during the request
            console.error('Error:', error);
          });
    }


    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData((preveFormData) => ({
            ...preveFormData,
            [name]: value,
      }));
      //Validation types
      const newError = {...errors};
      if(name === 'Password'){
        const specialCharacter = /[!@#$%^&*()\-+=><?<,.]/;
        //must be 10 characters long 
        if(value.length < 10){
          newError[name] = 'Must be at least 10 characters long';
        }else{
          delete newError[name];
        }
        //must have a capital letter
        if(!/[A-Z]/.test(value)){
          newError[name] = 'Must have a capital letter'
        }
        //must have a lowercase letter
        if(!/[a-z]/.test(value)){
          newError[name] = 'Must have a lowercase letter'
        }
        //must have a number
        if(!/[0-9]/.test(value)){
          newError[name] = "Must have a number"
        }
        //must have special characters 
        if(!specialCharacter.test(value)){
          newError[name] = `Must have special characters ! @ # $ % ^ & * (  ) - _ + = > < , . ?`
        }
        //No tabs or spaces 
        if(/[ \t]/.test(value)){
          newError[name] = "Spaces and tabs are forbidden"
        }
        //at least 3 different characters in total
        const uniqueChars = new Set(value);
        if (uniqueChars.size < 3) {
          newError[name] = 'Must have at least 3 different characters';
        }

          //if all the requirements are met then delete
        if(!newError[name]){
          delete newError[name]; 
        }
      }
      if(name === 'PasswordConfirmed'){
        if(value !== formData.Password){
          newError[name] = 'Passwords Do not match';
        }else{
          delete newError[name];
        }

      }
      setErrors(newError)
    }
    const fields = [
        { name: 'Name', label: 'Name:', type: 'text' },
        { name: 'Email', label: 'Email:', type: 'email' },
        { name: 'Username', label: "Username:", type: 'text' },
        {name: 'Password', label: "Password", type: 'text'}, 
        {name: "PasswordConfirmed", label: 'Confirm Password', type: 'text'}, 
       
      ];


//password requirements 

//no space or tab 

//must have at least 3 different letters 
// {name: 'SecurityQuetsion', label: 'Security Question', type:'radio'},
//{name: 'SecurityAnswer', label: 'Security Question Answered', type:'text'}
  return (
    <>
      <div>
        <h1>Create an account</h1>
      </div>
      <div>
        {fields.map((field, index) => (
          <div key={index}>
            <label className="formLabel">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleInputChange}
            />
            {errors && errors[field.name] && (
              <p className='error'>{errors[field.name]}</p>
            )}
          </div>
        ))}
        <button onClick={handleFormSubmit}>Create Account</button>
      </div>
    </>
  )
}

export default Register