import React, { useState } from 'react'

const Popup = ({isOpen, onClose, onSave}) => {
  const [name,setName] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [descripton, setDescription] = useState('')

//need 
//  name 
//  staet time 
//  end time

//Optional for a discription

  const handleSubmit = () => {
   
  }
  
  const handleSave = () => {
    const newEvent = {
        Name: name,
        StartTime: startTime,
        EndTime: endTime,
        Description: descripton
    };

    onSave(newEvent)  //saves the event 

    //Now that event has been saved clear the entered data 
    setName('');
    setStartTime('');
    setEndTime('');
    setDescription('');
    onClose();
   
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
        <h1>Add a New Event</h1>
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
                <input
                    type='text'
                    placeholder='Description of Event'
                    value={descripton}
                    onChange={(e) => setDescription(e.target.value)}
                />
            <button onClick={handleSave}>Save Event</button>
            <button onClick={handleCancel}>Cancel</button>

    </div>
  )
}

export default Popup