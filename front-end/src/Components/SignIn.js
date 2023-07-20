//the page that shows up when you register 
//has the whole info you add into the field for a new acount 
//has the forgot password button 
//has sign up button 
//alters the nav bar 


import React from 'react'
import Form from './Form'

const SignIn = () => {
   

    //handle submit 



    const fields = [
       
        { name: 'Email', label: 'Email:', type: 'email' },
        { name: 'Password', label: "Password", type: 'text'},
        { name:"ForgotPassword", label: 'Forgotten Password', type: 'button' },
        { name: 'RegisterAccount', label: 'Register Account', type: 'button' }
      ];

    return (
    
    <div className="SignInForm">
       <h1 className='Title'>SignIn</h1> 
    <Form fields={fields} />



    </div>
    




  )
}

export default SignIn