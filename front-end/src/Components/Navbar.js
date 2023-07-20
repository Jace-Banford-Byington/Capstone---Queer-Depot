//About us 
//Home
//Donation Link - takes you to a page 
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navBar'>
    <NavLink to="/" className={({ isActive, isPending, toClick }) => isPending ? "pending" : isActive ? "active" : toClick ? "toClick" : ""}>
      <img id='logoBtn' src='./logo.png'/>
    </NavLink>
    <NavLink to="/Donate" className={({ isActive, isPending, toClick }) => isPending ? "pending" : isActive ? "active" : toClick ? "toClick" : ""}>
        Donate
    </NavLink>
    < NavLink to='/SignIn' className={({ isActive, isPending, toClick }) => isPending ? "pending" : isActive ? "active" : toClick ? "toClick" : ""} >
        SignIn
    </NavLink>
    <label className='charityTotal'>CurrentTotal Donated</label>
    {/* //Amount currently donated to charity */}
    </div>
  )
}

export default Navbar