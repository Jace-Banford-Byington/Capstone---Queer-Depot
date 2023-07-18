import React from 'react'

const Register = () => {
  return (
    <div>
      <h1>Create an account</h1></div>
  )
}

export default Register

// import React, { useState } from 'react'
// import Form from './Form';
// import Key from './Key';


// const Register = () => {
//   const url = "http://localhost:1313/register"
//   const [apiKey,setKey] = useState('');
//   const handleFormSubmit = (formData) => {
//         console.log("Form Data",formData)
//         //send to the register method in api

//         fetch( url, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(formData),
//         })
//           .then(resp => resp.json())
//           .then(data => {
//             console.log("API Response", data)
//             setKey(data.Key);
//           })
//           .catch(error => {
//             // Handle any errors that occur during the request
//             console.error('Error:', error);
//           });

//     }

//     const fields = [
//         { name: 'Name', label: 'Name:', type: 'text' },
//         { name: 'Email', label: 'Email:', type: 'email' },
//         { name: 'Username', label: "Username:", type: 'text' }
//       ];


//   return (
//     <>
//         <h1>Register For an Account!</h1>
//         <Form  fields={fields} onSubmit={handleFormSubmit} />

//         {apiKey && (
//         <Key apiKey={apiKey} />
//       )}
        
//     </>
//   )
// }

// export default Register