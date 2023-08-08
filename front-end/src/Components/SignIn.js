//the page that shows up when you register 
//has the whole info you add into the field for a new account 
//has the forgot password button 
//has sign up button 
//alters the nav bar 

import  { useState, useEffect  }from 'react'
import Form from './Form'
import TokenHook from './TokenHook';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const hasToken = TokenHook();
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
                  //send to homepage
                  navigate('/')
               }
              })
              .catch(error => {
                // Handle any errors that occur during the request
                console.error('Error:', error);
              });
        }

    const fields = [
       
        { name: 'Username', label: 'Username:', type: 'type' },
        { name: 'Password', label: "Password", type: 'text'}
    ];
    useEffect(() => {
      if (hasToken) {
        // Replace '/otherpage' with the desired page where you want to navigate
        navigate('/', { replace: true });
        window.location.reload(); // Refresh the page
      }
    }, [hasToken, navigate]);
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