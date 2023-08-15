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
      <h1 className='intro' data-text='Welcome to Queer Depo'>Welcome to Queer Depo</h1> 
        <h4>Just clothes.</h4>
        <img className='homeLogo' src='./logo.png'/>       

          <p>Come Join us at 
              <br/>
            4545 S 900 E, Salt Lake City, UT 84117</p>
            {/* <img src='./map.png' /> */}
           <Calendar />
            <h1 className='storeHours'> Hours : <br/>

                    Monday: 6 pm - 6 am <br/>
                    Tuesday: Donation Day <br/>
                    Wednesday: 8 am - 8 pm <br/>
                    Thursday: 8 am - 8 pm <br />
                    Friday: 8 am - 8 pm <br />
                    Saturday: 8 am - 10 pm <br />
                    Sunday: 11 am - 3 pm <br />
          </h1>
            <img className='location' src='./location.png' />
           
            {/* <Map /> */}

    </div>

    
  )
}

export default Home


// Slogan: 
// Just clothes
