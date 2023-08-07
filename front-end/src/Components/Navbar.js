//About us 
//Home
//Donation Link - takes you to a page 
import React from 'react';
import { NavLink } from 'react-router-dom';
import TokenHook from './TokenHook';
const Navbar = () => {
  const tokenAuth = TokenHook();




//Things you should always see



  return (
    <div className='navBar'>











    <NavLink to="/" className={({ isActive, isPending, toClick }) => isPending ? "pending" : isActive ? "active" : toClick ? "toClick" : ""}>
      <img id='logoBtn' src='./logo.png'/>
    </NavLink>
    <NavLink to="/Donate" className={({ isActive, isPending, toClick }) => isPending ? "pending" : isActive ? "active" : toClick ? "toClick" : ""}>
        Donate
    </NavLink>
    < NavLink to='/Volunteer' className={({ isActive, isPending, toClick }) => isPending ? "pending" : isActive ? "active" : toClick ? "toClick" : ""} >
        Volunteer
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