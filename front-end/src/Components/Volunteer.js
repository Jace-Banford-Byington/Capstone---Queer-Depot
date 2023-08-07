import React from 'react'
import Survey from './Survey'

const Volunteer = () => {

//Logic: if age entered in is below 10 or older than 20 reject volunteer application 
//send out an email with the users name they entered - if email provided 
//send text to number provided - only if email not provided 
//if below age 12 send we are sorry but you are under the legal age we can accept your volunteer opportunities. 
//If above 20, send we are sorry but we are only accepting volunteers below 20, to help youth gain experience and have a welcoming space for those who need it, feel free to apply for a position with us 

//Maximum amount of Volunteers : 20 if it exceeds this send out: We are currently have the max amount of volunteers we can guarantee work can be provided, you have been put on the volunteer waiting list in case 

  return (
    <div>
        <h1><p className='Responsibilities'>
            So your Interested in being a volunteer. 
            Here is some information that you should know. 

            Responsibilities: <br/>
                        Sort through Donated Clothes, <br />
                        Organize the store, <br />
                        Cleaning, <br />
                        Fill in for employees if needed, <br />
                        Help with store events <br />

            Requirements for potential Volunteers: <br />
                       Preferably Aged: 12 - 15 <br />
                       Somehow Queer in any capacity (Gender/Sexuality/etc.)
                       
            
            
            </p></h1>

      <Survey />




    </div>
  )
}

export default Volunteer