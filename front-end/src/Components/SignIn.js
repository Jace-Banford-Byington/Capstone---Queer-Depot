import React, { useState, useEffect } from 'react';
import TokenHook from './TokenHook';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const hasToken = TokenHook();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false)

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

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (hasToken) {
      setIsAuthenticated(true);
      console.log('Token is set');
    }
  }, [hasToken]);

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <div className="SignInForm">
        <h1 className="Title SignInForm">Sign In</h1>

        <label className="SignInForm mt-2 formLabel">Username:</label>
        <input
          className=" SignInForm mb-3 form-control"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <div className="form-group">
          <label className="SignInForm formLabel">Password:</label>
          <div className="input-group">
          <input
              className={`SignInForm form-control ${showPassword ? "showPassword" : ""}`}
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="icon-eye" onClick={togglePassword}>
              {showPassword ? (
                <i className="bi bi-eye"></i>
              ) : (
                <i className="bi bi-eye-slash"></i>
              )}
            </span>
            </div>
          </div>
        </div>
        <div className='d-flex flex-column align-items-center'>
          <button className="btn-primary  bt-9" onClick={handleSignIn}>
                  Sign In
                </button>

                <Link to="/Register" className='mt-3'>Make an Account</Link>
        </div>
       
      </div>
  );
};

export default SignIn;
