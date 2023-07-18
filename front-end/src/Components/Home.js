import React from 'react'
import Map from './Map'
const Home = () => {
  return (
    <div className='homeDescription'>
      <h1 className='intro'>Welcome to Queer Depo</h1> 
        <h3>Just clothes.</h3>
        <img className='homeLogo' src='./logo.png'/>       

          <p>Come Join us at 
              <br/>
            4545 S 900 E, Salt Lake City, UT 84117</p>
            <img src='./map.png' />

            <h1 className='storeHours'> Hours : <br/>

                    Monday: 6 pm - 6 am <br/>

                    Tuesday: Donation Day <br/>

                    Wednesday: 8 am - 8 pm <br/>

                    Thursday: 8 am - 8 pm <br />

                    Friday: 8 am - 8 pm <br />

                    Saturday: 8 am - 10 pm <br />

                    Sunday: 11 am - 3 pm <br />
          </h1>

            {/* <Map /> */}

    </div>

    
  )
}

export default Home


// Slogan: 
// Just clothes
