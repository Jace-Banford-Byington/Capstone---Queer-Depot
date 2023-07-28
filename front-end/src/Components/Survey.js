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
        { name: 'Pronouns', label: "Prounouns:", type: 'dropdown'},
        { name:"inSchool", label: 'Currently in School', type: 'checkbox' },
        { name: "Job", label: "Job:", type: 'text' },
        { name: "Sexuality", label: "Sexuality", type:'text' },
        { name: "Age", label: "Age:", type: 'number' },
        { name: "Gender", label: "Gender", type:'text' },
        { name: "ContactMethods", label: "Contact Methods: ", type: 'radio' },
        { name: "HoursRequested", label: "Hours requested" }
    ];

  return ( 
    <>
        <h1><p>
            So your Intrested in being a volunteer. 
            Here is some infromation that you should know. 

            Responabilies: <br/>
                        Sort through Donated Clothes, <br />
                        Orginize the store, <br />
                        Cleaning, <br />
                        Fill in for employees if needed, <br />
                        Help with store events <br />

            Requirements for potentially 
            
            
            </p></h1>
        <Form fields={fields} onSubmit={handleSubmit}/>

    
    </>
  )
}

export default Survey