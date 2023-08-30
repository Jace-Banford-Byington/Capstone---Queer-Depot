import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import Map from './Map'
import Calendar from './Calendar'
import TokenHook from './TokenHook'
const Home = () => {

  const hasToken = TokenHook();
  const navigate = useNavigate();

  useEffect(() => {
    if (hasToken) {
      navigate('/', { replace: true });
    }
  }, [hasToken, navigate]);


  return (
    <div className='homeDescription'>
 <h1 className='intro'>Welcome to Queer Depo</h1>        
 <h4>Just clothes.</h4>
        <img className='homeLogo' src='./logo.png'/>       

          <p className='address'>
            Come Join us at 
              <br/>
            4545 S 900 E, 
            <br/> Salt Lake City, UT  
            <br/> 84117
          </p>
<div className='flex'>

            {/* <img src='./map.png' /> */}
            <div className="storeHours">
              <h1>Hours:</h1>
              <ul>
                <li>
                  <span>Monday:</span> 6 pm - 6 am
                </li>
                <li>
                  <span>Tuesday:</span> Donation Day
                </li>
                <li>
                  <span>Wednesday:</span> 8 am - 8 pm
                </li>
                <li>
                  <span>Thursday:</span> 8 am - 8 pm
                </li>
                <li>
                  <span>Friday:</span> 8 am - 8 pm
                </li>
                <li>
                  <span>Saturday:</span> 8 am - 10 pm
                </li>
                <li>
                  <span>Sunday:</span> 11 am - 3 pm
                </li>
              </ul>
            </div>
            <Calendar />
          
              

             
                  
                    {/* <Map /> */}

          </div>
           <img className='location' src='./location.png' alt='Queer Depo Location'/>

    </div>

    
  )
}

export default Home


// Slogan: 
// Just clothes
