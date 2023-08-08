//About us 
//Home
//Donation Link - takes you to a page 
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
const Navbar = () => {
  const hasToken = localStorage.getItem('token'); // Get token from localStorage
  const navigate = useNavigate()

  const handleSignOut = () => {
    localStorage.removeItem('token')
    navigate('/')
    window.location.reload()

  }

//Things you should always see
    //Home Page 
    //Donation Page 
    //Charity Total 

//Not signed in 
  //Sign In 
  
//Signed in 
  //Volunteer 
  //Profile page   
  //Sign Out

  return (
    <div className='navBar'>


  <NavLink to="/" className={({ isActive, isPending, toClick }) => isPending ? "pending" : isActive ? "active" : toClick ? "toClick" : ""}>
      <img id='logoBtn' src='./logo.png'/>
  </NavLink>
    
  <NavLink to="/Donate" className={({ isActive, isPending, toClick }) => isPending ? "pending" : isActive ? "active" : toClick ? "toClick" : ""}>
            Donate
  </NavLink>
    
    
    {hasToken ? (  //tHERE IS A TOKEN
      <>
      < NavLink to='/Volunteer' className={({ isActive, isPending, toClick }) => isPending ? "pending" : isActive ? "active" : toClick ? "toClick" : ""} >
        Volunteer
    </NavLink>
    <NavLink to=''  className={({ isActive, isPending, toClick }) => isPending ? "pending" : isActive ? "active" : toClick ? "toClick" : ""} >
        Profile
    </NavLink>
      <button onClick={handleSignOut}>Sign Out</button>
      </>
    ) : ( //No token

      <NavLink to='/SignIn' className={({ isActive, isPending, toClick }) => isPending ? "pending" : isActive ? "active" : toClick ? "toClick" : ""} >
            Log In
      </NavLink>
    

    )
  }
   
 <label className='charityTotal'>CurrentTotal Donated</label>
    {/* //Amount currently donated to charity */}
 
  
    
    </div>
  )
}

export default Navbar