import React, { useState, useEffect } from 'react';
import TokenHook from './TokenHook';
import { Link, useNavigate } from 'react-router-dom';
import '../index.scss';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const hasToken = TokenHook();
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication status

  const url = 'http://localhost:3300/signin';

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { username, password }; // Get form data from state
    console.log('Entered Data', formData);

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log('Was successful');

        const { token } = data;
        if (token) {
          // Storing the token
          localStorage.setItem('token', token);
          setIsAuthenticated(true);
          // Send to homepage
          navigate('/');
        }
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error('Error:', error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Update the corresponding state based on the input field name
    if (name === 'Username') {
      setUsername(value);
    } else if (name === 'Password') {
      setPassword(value);
    }
  };

  useEffect(() => {
    if (hasToken) {
      setIsAuthenticated(true);
      console.log('Token is set');
    }
  }, [hasToken]);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-10">
      <div className="SignInForm">
        <h1 className="Title">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="SignInForm mb-3">
            <label className="formLabel">Username:</label>
            <input
              type="text"
              name="Username"
              value={username}
              onChange={handleInputChange}
            />
          </div>
          <div className="SignInForm">
            <label className="formLabel">Password:</label>
            <input
              type="password"
              name="Password"
              value={password}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <Link to="/Register">Make an Account</Link>
      </div>
    </div>
  );
};

export default SignIn;
