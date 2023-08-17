import { useState } from 'react'
import React from 'react'
import { event } from 'jquery';
import BirthdayPicker from './BirthdayPicker';

const url = 'http://localhost:3300/volunteer'

const Survey = () => {
  const [inSchool, setInSchool] = useState(false); // Where the in school is stored
  const [selectedPronoun, setSelectedPronoun] = useState(''); //where pronouns are stored
  const [customPronoun, setCustomPronoun] = useState(''); //Where the custom pronounts are placed if they have any 
  const [legalName, setLegalName] = useState(''); // stores the legal name
  const [preferredName, setPreferredName] = useState(''); // Stores the prefered naame
  const [sexuality, setSexuality] = useState(''); // keeps track of the entered sexuality
  const [gender, setGender] = useState('')
  const [birthday, setBirthday] = useState({}); // stores birthday 
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('')
  const[errors, setErrors] = useState(''); //will store errors found in submitting form
 
  const handleDateChange = (date) => {
    const parsedDate = new Date(date);
  
    const year = parsedDate.getFullYear();
    const month = parsedDate.getMonth() + 1; // Month is 0-based
    const day = parsedDate.getDate();
      
    setBirthday({year,month,day});
  };

  const calculateAge = () => {
    const birthdate = new Date(birthday.year, birthday.month - 1, birthday.day);
    const currentDate = new Date();
    let calculatedAge = currentDate.getFullYear() - birthdate.getFullYear();

    if (
      currentDate.getMonth() < birthdate.getMonth() ||
      (currentDate.getMonth() === birthdate.getMonth() &&
      currentDate.getDate() < birthdate.getDate())
    ) {
      calculatedAge--;
    }

    return calculatedAge;
  };


  
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

  const handleSubmit = async (event) => {
      event.preventDefault();

      const formData = {
        Email: email,
        LegalName: legalName,
        PreferredName: preferredName,
        Pronoun: selectedPronoun,
        CustomPronoun: customPronoun,
        InSchool: inSchool,
        Sexuality: sexuality,
        Gender: gender,
        Birthday: birthday,
        Age: calculateAge()
      };
      console.log("Form Data:", formData)
      const error = {};

    if (Object.keys(errors).length > 0) {
      console.log("Got Errors")
      setErrors(errors);
    } else {
      // Reset form errors if there are none
      setErrors({});

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then((response) => response.text()) // Get the response as text
      .then((data) => {
        console.log(data); // Log the response as plain text
      })
      .catch((error) => {
        console.error('Error:', error);
      });
        }
};


  return ( 
   <>
    <div className='survey'>

    <label>Email</label>
        <input
          type='email'
          name='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Legal Name</label>
        <input 
            type='text' 
            name='LegalName' 
            value={legalName} 
            onChange={(e) => setLegalName(e.target.value)}
        />

        <label>Preferred Name</label>
        <input 
            type='text'
            name='PreferredName'
            value={preferredName}
            onChange={(e) => setPreferredName(e.target.value)}
        />

        <label>Pronoun</label>
        <select 
            type='dropdown'
            value={selectedPronoun}
            onChange={handlePronounChange}
            className='survey mb-3'
          >
            <option value=''>Select pronoun</option>
            <option value= 'he'>He/Him</option>
            <option value='she'>She/Her</option>
            <option value='they'>They/Them</option>
            <option value='custom'>Custom</option>
          </select>
         
          {selectedPronoun === 'custom' && ( <>
            <label>Custom:</label>
            <input
              className='survey mb-3'
              type='text'
              name='CustomPronoun'
              value={customPronoun}
              onChange={(e) => setCustomPronoun(e.target.value)}
            />
            </>
          )}

          <label>In School</label>
          <input
           type=  'checkbox'
           value={inSchool}
           onChange= {(e) => setInSchool(e.target.value)}
           className= 'survey mb-3 '
           />

           <label>Sexuality</label>
           <input 
              type='text'
              name='Sexuality'
              value={sexuality}
              onChange={(e)=> setSexuality(e.target.value)}
            />

            <label>Gender</label>
            <input 
                type='text'
                name='Gender'
                value={gender}
                onChange={(e) => setGender(e.target.value)}
            />


           <BirthdayPicker  onDateChange={handleDateChange}/>

        <button className='mt-3 formSubmit' type='submit' onClick={handleSubmit}>
        Submit
      </button>
        </div>
    </>
  )
}


export default Survey