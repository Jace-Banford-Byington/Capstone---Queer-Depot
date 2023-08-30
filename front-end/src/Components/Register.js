import React,  { useEffect, useState } from 'react'
import  Form from './Form'

const Register = () => {

  const url = "http://localhost:3300/register"
  const [formData, setFormData] = useState({});
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState('')
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


    const togglePassword = () => {
      setShowPassword(!showPassword);
    };
//password requirements 

//no space or tab 

//must have at least 3 different letters 
// {name: 'SecurityQuetsion', label: 'Security Question', type:'radio'},
//{name: 'SecurityAnswer', label: 'Security Question Answered', type:'text'}

const fields = [
  { name: 'Name', label: 'Name:', value: name, onChange: setName },
  { name: 'Email', label: 'Email:', value: email, onChange: setEmail },
  { name: 'Username', label: 'Username:', value: username, onChange: setUsername },
  { name: 'Password', label: 'Password: ', value: password, onChange: setPassword  },
  {name: 'ConfirmPassword', label: 'Confirm Password', value: confirmPassword, onChange: setConfirmPassword}

  // You can similarly add username, password, and confirmPassword fields
];

  return (
    <>
    <div className='container d-flex flex-column justify-content-center align-items-center'>
      <div className='register' >
              <h1 className='Title register'>Create an account</h1>
            
              <div className='registrationForm'>

              {fields.map((fields, index) => (
                <div key={index}>
                  <label className='registrationForm formLabel'>{fields.label}</label>
                  <input
                    className={`registrationForm form-control ${showPassword ? "showPassword" : ""}`}
                    //{showPassword ? "text" : "password"}
                    type={showPassword ? "text" : "password"}
                    value={fields.value}
                    onChange={(e) => fields.onChange(e.target.value)}
                  />
                {fields.name.includes('Password') && (
                    <span className="icon-eye" onClick={togglePassword}>
                      {showPassword ? (
                        <i className="bi bi-eye"></i>
                      ) : (
                        <i className="bi bi-eye-slash"></i>
                      )}
                    </span>
                  )}

                  {errors && errors[fields.name] && (
                    <p className='error'>{errors[fields.name]}</p>
                  )}
                  
                </div>
              ))}
              <div className='d-flex flex-column align-items-center'>
                <button className="btn-primary  bt-9  mt-5" onClick={handleFormSubmit}>Create Account</button>
              </div>
            
            </div>
          </div>

    </div>
      
    </>
  )
}

export default Register