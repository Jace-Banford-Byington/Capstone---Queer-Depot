//the page that shows up when you register 
//has the whole info you add into the field for a new account 
//has the forgot password button 
//has sign up button 
//alters the nav bar 


import  { useState  }from 'react'
import Form from './Form'
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [rememberMe, setRememberMe] = useState(false);

    const url = "http://localhost:3300/signin"

    //handle submit 
    const handleSubmit = (event, formData) => {
        event.preventDefault();
        console.log('Entered Data', formData);
        //send the formdata to the sign in 
        fetch(url, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            })
              .then(resp => resp.json())
              .then(data => {
                console.log("Was successful")
              })
              .catch(error => {
                // Handle any errors that occur during the request
                console.error('Error:', error);
              });
        }


    


    const fields = [
       
        { name: 'Username', label: 'Username:', type: 'type' },
        { name: 'Password', label: "Password", type: 'text'},
        { name:"ForgotPassword", label: 'Forgotten Password', type: 'button' }
    ];

    return (
    
    <div className="SignInForm">
       <h1 className='Title'>SignIn</h1> 
    <Form fields={fields} onSubmit={handleSubmit}/>
    <label className='rememberMe'>
        Remember Me
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
        />
     </label>
    <Link to="/Register">
            Make an Account
    </Link>


    </div>
    


  )

}
export default SignIn