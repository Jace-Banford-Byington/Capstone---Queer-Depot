import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h3>{event.Name}</h3>
      <p>Starts: {new Date(event.StartTime).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      })}</p>
      <p>Ends: {new Date(event.EndTime).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      })}</p>
      <p>{event.Description}</p>
    </div>
  );
};

export default EventCard;
