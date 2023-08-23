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

  <NavLink to="/" >
      <img id='logoBtn' src='./logo.png'/>
  </NavLink>
    
  <NavLink to="/Donate">
            Donate
  </NavLink>
    
    
    {hasToken ? (  //tHERE IS A TOKEN
      <>
      < NavLink to='/Volunteer'  >
        Volunteer
    </NavLink>
    <NavLink to='/Profile' >
        Profile
    </NavLink>
      <a className='signOut' onClick={handleSignOut}>Sign Out</a>
      </>
    ) : ( //No token

      <NavLink to='/SignIn' >
            Log In
      </NavLink>
    

    )
  }
   
 {/* <label className='charityTotal'>CurrentTotal Donated</label> */}
  
    
    </div>
  )
}

export default Navbar