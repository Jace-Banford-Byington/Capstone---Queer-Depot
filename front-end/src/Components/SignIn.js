//the page that shows up when you register 
//has the whole info you add into the field for a new account 
//has the forgot password button 
//has sign up button 
//alters the nav bar 

import  { useState, useEffect  }from 'react'
import Form from './Form'
import TokenHook from './TokenHook';
import { Link, useNavigate } from 'react-router-dom';
import '../index.scss'
const SignIn = () => {

  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const hasToken = TokenHook();
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication status

  const url = "http://localhost:3300/signin"

    //handle submit 
    const handleSubmit = async (event, formData) => {
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


                const { token } = data;
                if(token){
                  //storing the token 
                  localStorage.setItem('token', token);
                 setIsAuthenticated(true)
                  //send to homepage
                  navigate('/')
               }
              })
              .catch(error => {
                // Handle any errors that occur during the request
                console.error('Error:', error);
              });
        }


    const handleInputChange = (event) => {

    }
    

    const fields = [
        { name: 'Username', label: 'Username:', type: 'type' , className: 'SignInForm mb-3 ' },
        { name: 'Password', label: "Password: ", type: 'text', className: "SignInForm"}
    ];
    useEffect(() => {
      if (hasToken) {
      setIsAuthenticated(true)
      console.log('Token is set')
      }
    }, [hasToken]);
    return (
      <div className="container d-flex justify-content-center align-items-center vh-10">
    <div className="SignInForm">
       <h1 className='Title'>Sign In</h1> 
    <Form fields={fields} onSubmit={handleSubmit} onInputChange={handleInputChange}/>

    <Link to="/Register">
            Make an Account
    </Link>


    </div>
    </div>


  )

}
export default SignIn