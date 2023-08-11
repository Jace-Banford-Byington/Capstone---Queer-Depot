import { useState } from 'react'
import React from 'react'
import Form from './Form'

const Survey = () => {
  const [selectedPronoun, setSelectedPronoun] = useState('');
  const [customPronoun, setCustomPronoun] = useState('');
  const [inSchool, setInSchool] = useState(false); // Initial value is false

 
 
  const handleCheckboxChange = () => {
    setInSchool(!inSchool); // Toggle the value when checkbox is clicked
  };

  const handlePronounChange = (event) => {
    const value = event.target.value;
    setSelectedPronoun(value);

    // Clear the custom pronoun input when a pre-defined pronoun is selected
    if (value !== 'custom') {
      setCustomPronoun('');
    }
  };
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
       
        { name: 'LegalName', label: 'Legal Name:', type: 'type' },
        { name: "PreferredName", label:"Preferred Name:", type: "text" },
        {
          name: 'Pronoun',
          label: 'Pronoun:',
          type: 'select', // Use a select type for the dropdown
          options: ['he', 'she', 'they', 'custom'],
          value: formData.Pronoun,
          onChange: handleInputChange,
        },
        {
          name: 'inSchool',
          label: 'Currently in School',
          type: 'checkbox',
          checked: inSchool,
          onChange: handleCheckboxChange,
        },        
        { name: "Job", label: "Job:", type: 'text' },
        { name: "Sexuality", label: "Sexuality:", type:'text' },
        { name: "Age", label: "Age:", type: 'number' },
        { name: "Gender", label: "Gender:", type:'text' },
        { name: "HoursRequested", label: "Hours requested:" },
       
    ];
 // <> { 
    //     name: 'Pronouns',
    //     label: 'Pronouns:',
    //     type: 'select',
    //     options: [
    //       { value: 'he', label: 'He/Him' },
    //       { value: 'she', label: 'She/Her' },
    //       { value: 'they', label: 'They/Them' },
    //       { value: 'custom', label: 'Custom' },
    //     ],
    //     value: selectedPronoun,
    //     onChange: handlePronounChange,
    //   },
    //   {
    //     name: 'CustomPronoun',
    //     label: 'Enter Custom Pronoun:',
    //     type: 'text',
    //     value: customPronoun,
    //     onChange: (event) => setCustomPronoun(event.target.value),
    //     hidden: selectedPronoun !== 'custom', // Hide the field unless "Custom" is selected
    //   },
  return ( 
   <>
        <div className='survey'>
          





                  <Form  fields={fields} onSubmit={handleSubmit}/>

        </div>
          //Have a part where ou can either enter custom pronouns or choose from the 3 main ones


            //This is where you put the radio button for the different contacting methods email 
                                                                                          phone 
                                                                                          both 

     // depending on which one is clicked show field to put in an email address a phone number or both fields
    
    </>
  )
}

export default Survey