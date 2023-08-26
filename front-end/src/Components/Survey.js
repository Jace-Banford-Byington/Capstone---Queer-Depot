import React, { useState } from 'react';
import jwt_decode from 'jwt-decode'; // Import jwt-decode library
import BirthdayPicker from './BirthdayPicker';

const url = 'http://localhost:3300/volunteer';

const Survey = () => {
  const [inSchool, setInSchool] = useState(false);
  const [selectedPronoun, setSelectedPronoun] = useState('');
  const [customPronoun, setCustomPronoun] = useState('');
  const [legalName, setLegalName] = useState('');
  const [preferredName, setPreferredName] = useState('');
  const [sexuality, setSexuality] = useState('');
  const [gender, setGender] = useState('');
  const [birthday, setBirthday] = useState({});
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [errors, setErrors] = useState({});

  const handleDateChange = (date) => {
    const parsedDate = new Date(date);

    const year = parsedDate.getFullYear();
    const month = parsedDate.getMonth() + 1; // Month is 0-based
    const day = parsedDate.getDate();

    setBirthday({ year, month, day });
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
    setInSchool(!inSchool);
  };

  const handlePronounChange = (event) => {
    const value = event.target.value;
    setSelectedPronoun(value);

    if (value !== 'custom') {
      setCustomPronoun('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage

    if (!token) {
      console.error('Token not found');
      return;
    }
    try {
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.username;

      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };

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
        Age: calculateAge(),
      };

      if (Object.keys(errors).length > 0) {
        setErrors(errors);
      } else {
        setErrors({});

        fetch(url, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(formData),
        })
          .then((response) => response.text())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }
    } catch (error) {
      console.error('Error:', error);
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
              className='survey custom mb-3'
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

        <button className='mt-3 formSubmit btn-primary' type='submit' onClick={handleSubmit}>
        Submit
      </button>
        </div>
    </>
 
  );
};

export default Survey;