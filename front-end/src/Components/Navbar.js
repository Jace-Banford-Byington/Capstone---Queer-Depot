//About us 
//Home
//Donation Link - takes you to a page 
import React from 'react';
import { NavLink } from 'react-router-dom';
import TokenHook from './TokenHook';
const Navbar = () => {
  const hasToken = TokenHook();




//Things you should always see
    //Home Page 
    //Donation Page 
    //Charity Total 

//Not signed in 
  //Sign In 
  
//Signed in 
  //Volunteer 
  //Profile page   

  return (
    <div className='navBar'>


  <NavLink to="/" className={({ isActive, isPending, toClick }) => isPending ? "pending" : isActive ? "active" : toClick ? "toClick" : ""}>
      <img id='logoBtn' src='./logo.png'/>
  </NavLink>
    
  <NavLink to="/Donate" className={({ isActive, isPending, toClick }) => isPending ? "pending" : isActive ? "active" : toClick ? "toClick" : ""}>
            Donate
  </NavLink>
    
    <label className='charityTotal'>CurrentTotal Donated</label>
    {/* //Amount currently donated to charity */}

    {hasToken ? (  //tHERE IS A TOKEN
      <>
      < NavLink to='/Volunteer' className={({ isActive, isPending, toClick }) => isPending ? "pending" : isActive ? "active" : toClick ? "toClick" : ""} >
        Volunteer
    </NavLink>
    <NavLink to=''  className={({ isActive, isPending, toClick }) => isPending ? "pending" : isActive ? "active" : toClick ? "toClick" : ""} >
        Profile
    </NavLink>
      
      </>
    ) : ( //No token

      <NavLink to='/SignIn' className={({ isActive, isPending, toClick }) => isPending ? "pending" : isActive ? "active" : toClick ? "toClick" : ""} >
            Log In
      </NavLink>
    

    )
  
  
  
  
  }
   

 
  
    
    </div>
  )
}

export default Navbar