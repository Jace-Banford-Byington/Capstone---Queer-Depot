import React from 'react'
import Form from './Form'

const Survey = () => {

const handleSubmit = () => {

};
// //○	Requirements for Volunteers (Expectations, Roles, etc.) 
// ○	Name 
// ○	Pronouns 
// ○	In School? 
// ○	Job?
// ○	Sexuality 
// ○	Gender 
// ○	Age
// ○	Hours requested 
// ○	Ways to Contact (Email / Phone / both)   
//                      Monday: 6 pm - 6 am <br/>

                    // Tuesday: Donation Day <br/>

                    // Wednesday: 8 am - 8 pm <br/>

                    // Thursday: 8 am - 8 pm <br />

                    // Friday: 8 am - 8 pm <br />

                    // Saturday: 8 am - 10 pm <br />

                    // Sunday: 11 am - 3 pm <br />




    const fields = [
       
        { name: 'Name', label: 'Name:', type: 'type' },
        { name: "PerferedName", label:"Preferred Name", type: "text" },
        { name:"inSchool", label: 'Currently in School', type: 'checkbox' },
        { name: "Job", label: "Job:", type: 'text' },
        { name: "Sexuality", label: "Sexuality", type:'text' },
        { name: "Age", label: "Age:", type: 'number' },
        { name: "Gender", label: "Gender", type:'text' },
        { name: "HoursRequested", label: "Hours requested" }
    ];

  return ( 
    <>
        <div className='survey'>
                  <Form  fields={fields} onSubmit={handleSubmit}/>

        </div>
          /Have a part where ou can either enter custom pronouns or choose from the 3 main ones


            //This is where you put the radio button for the different contacting methods email 
                                                                                          phone 
                                                                                          both 

      depending on which one is clicked show field to put in an email address a phone number or both fields
    
    </>
  )
}

export default Survey