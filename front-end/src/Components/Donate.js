//The form that sends the amount donated to in database - will save Email and total donated / amount of times donated 
                                                        //will require all the information to be entered BUT wont save card info 
                                                        




//------------------------------------LOOK INYO PERSITANT DATA FOR CARD INFO----------------------------------------------------------//


                                    ///LOCAL STORAGE BEST PRACTICE 



//Local storage keeps  storing data that the user will need to access later - will survive refresh 

//Session storage only persists the data as long as a browser tab is opened. This means that each time you open a new tab or a new browser window, a new session storage is created

import React from 'react'
import CheckoutForm from './CheckoutForm'
import CardInfo from './CardInfo'
import Charity from './Charity'

const Donate = () => {
  return (
    <div>
      <Charity />

  
     <CheckoutForm />
     {/* <CardInfo /> */}


    </div>
  )
}

export default Donate