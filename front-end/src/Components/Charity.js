import React from 'react'

const Charity = () => {

   const goChat = () => {
    window.open('https://www.thetrevorproject.org/webchat', '_blank');
   };



  return (
    <>
    <h1>The Trevor Project</h1>

    <h1>Their Mission: </h1>
    <p>End suicide among LGBTQ youth by providing life-saving and life-affirming resources including our nationwide, 24/7 crisis intervention lifeline, digital community, and advocacy/educational programs that create a safe, supportive, and positive environment for everyone.</p>
    









    <div className='resources'>
        <h1>Contact Them: </h1>
            <h2>Text: </h2> 678-678 with the message START
            <h2>Call:</h2> 1-866-488-7386
            <h2>Web Chat:</h2> 
            <button type='submit' onClick={goChat}> </button> 
    </div>
    </>
  )
}

export default Charity



                ///Trevor Prodject
            //Mission Statement 
        //The Trevor Project is the leading national organization providing crisis intervention and suicide prevention services to lesbian, gay, bisexual, transgender, queer, and questioning (LGBTQ) young people under 25. Our mission is to end suicide among LGBTQ youth by providing life-saving and life-affirming resources including our nationwide, 24/7 crisis intervention lifeline, digital community, and advocacy/educational programs that create a safe, supportive, and positive environment for everyone.


            //Resources 
            //
            //Website link 
            //link to their chat website
            //Their Text Number  678-678  message: START    //When clicking the button it automatically popsup the 
            //Call Number : 1- 866-488-7386   