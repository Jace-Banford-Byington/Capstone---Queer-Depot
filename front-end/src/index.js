import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap
import './index.scss'; //your custom scss


import NavBar from './Components/Navbar';
import Register from './Components/Register';
import Home from './Components/Home'
import Donate from './Components/Donate';
import Charity from './Components/Charity';
import SignIn from './Components/SignIn';
import Calendar from './Components/Calendar';
import Survey from './Components/Survey';
import Volunteer from './Components/Volunteer'
import Profile from './Components/Profile';

const url = "http://localhost:2000"

const router = createBrowserRouter([

  {//Home page = /  
    path: '/',
    element : <> 
    <NavBar />
      <Home />
    </>

  },
  //http://localhost:1313/
 
  {
    path: '/Register',
    element: <>
                <NavBar />
                <Register />
            </>
  },
  {
    path: '/Donate',
    element: 
    <>
      <NavBar />
      <Donate />
      {/* <Calendar /> */}
    </>
  }, 
  {
    path: '/SignIn',
    element: <>
      <NavBar /> 
      <SignIn />
    </>
  },
  {
    path: '/Volunteer',
    element: <>
      <NavBar />
      <Volunteer />
    </>
  },
  {
    path: '/Profile',
    element: <>
      <NavBar />
      <Profile />
    </>
  }

]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
