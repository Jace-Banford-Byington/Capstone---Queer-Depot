//Show the Title of Event 
//Whats supposed to happen during it 
//When it starts 
//When it ends 

import React from 'react'

const EventDetails = ({event, onClose}) => {

    const startTime = event.start.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });

      const endTime = event.end.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });

      console.log("Event Details: ", event)





    return (
        <div className=" EventDetails">
            <div className='event-details-card'>
                <h3>{event.title}</h3>
                        <p>{event.description}</p>
                        <p>Starts: {startTime}</p>
                        <p>Ends: {endTime}</p>
                        <button onClick={onClose}>Close</button>


            </div>
          
        </div>
      );
    };

export default EventDetails