import React, { useState, useEffect } from 'react';
import TokenHook from './TokenHook';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const hasToken = TokenHook();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    console.log('Provided Information: ', { username, password });

    const url = 'http://localhost:3300/signin';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log('Was successful', data);

        const { token } = data;
        if (token) {
          localStorage.setItem('token', token);
          setIsAuthenticated(true);
          navigate('/');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
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
        <h1 className="Title SignInForm">Sign In</h1>
        <label className="SignInForm formLabel">Username:</label>
        <input
          className=" SignInForm mb-3"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="SignInForm formLabel">Password:</label>
        <input
          className="SignInForm"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="SignInForm mt-3 " onClick={handleSignIn}>
          Sign In
        </button>

        <Link to="/Register">Make an Account</Link>
      </div>
    </div>
  );
};

export default SignIn;
