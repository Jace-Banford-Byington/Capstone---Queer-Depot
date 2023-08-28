import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

const Popup = ({isOpen, onClose, onSave}) => {
  const [user, setUser] = useState(null)
  const [date, setDate] = useState('');
  const [name,setName] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [descripton, setDescription] = useState('')

//need 
//  name 
//  staet time 
//  end time

//Optional for a discription

useEffect(() => {
  const token = localStorage.getItem('token');

  if(token){
      try{
          const decodedToken = jwt_decode(token)
          console.log("Decoded Token: ", decodedToken)
              getEmail(decodedToken.username)
      }
      catch(err){
          console.error("Cannot decode token: ", err)
      }
  }
}, []);

  
  const handleSave = async () => {
    const newEvent = {
        Name: name,
        Date: date,
        StartTime: `${date}T${startTime}:00.000Z`, //:00.000Z repressents the Seconds , militisceconds and the ZULU Time (actual time reguardless of the local timezone and without the use of daylight savings)
        EndTime: `${date}T${endTime}:00.000Z`,
        Description: descripton,
        Email: user.Email
    };

    try {
      const response = await fetch('http://localhost:3300/addEvent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newEvent)
      });

      if (response.ok) {
        // Event saved successfully, you can handle the response as needed
        const responseData = await response.json();
        console.log('Event saved:', responseData);

        // Clear the input fields and close the popup
        setDate('')
        setName('');
        setStartTime('');
        setEndTime('');
        setDescription('');
        onClose();
      } else {
        console.error('Failed to save event');
      }
    } catch (error) {
      console.error('Error saving event:', error);
    }
  }
  
  const getEmail = async (username) => {
    try{
      //   /getInfo/:username
      const request = await fetch(`http://localhost:3300/getInfo/${username}`);
          if(request.ok){
              const userData = await request.json();
              console.log("Got Data: ", userData)
              setUser(userData)
          }
          else{
              console.err("Failed to find users data")
          }
  }catch(error){
      console.log("Error: ", error)
  }
  }



  const handleCancel = () => {
    // Clear the input fields and close the popup
    setName('');
    setStartTime('');
    setEndTime('');
    setDescription('');
    onClose();
  };
  
  return (
    <div className='popup'>
      <div className='popup-content'>
        <h1 className='title'>Add a New Event</h1>
        <label>Date: </label>
        <input
          type='date'
          value={date}
          onChange={(e)=> setDate(e.target.value)}
        />

        <label>Name:</label>
        <input 
          type='text'
          placeholder='Event Name'
          value={name}
          onChange={(e) => setName(e.target.value) }
        />
  
        <label>Start Time:</label>
        <input 
          type='time'
          placeholder='Start Time'
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
  
        <label>End Time:</label>
        <input 
          type='time'
          placeholder='End Time'
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
  
        <label>Description</label>
        <textarea
          className='description'
          placeholder='Description of Event'
          value={descripton}
          onChange={(e) => setDescription(e.target.value)}
        />
        
        <div className='button-group'>
          <button className='save-button' onClick={handleSave}>Save Event</button>
          <button className='cancel-button' onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
  
}

export default Popup