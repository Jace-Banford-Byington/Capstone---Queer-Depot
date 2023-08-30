import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import EventCard from './EventCards';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [userEvents, setUserEvents] = useState([]);
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('token');
    navigate('/SignIn');
    window.location.reload();
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const decodedToken = jwt_decode(token);
        console.log("Decoded Token: ", decodedToken);
        fetchUser(decodedToken.username);
        console.log(user);
      } catch (err) {
        console.error("Cannot decode token: ", err);
      }
    }
  }, []);

  const fetchUser = async (username) => {
    try {
      const request = await fetch(`http://localhost:3300/getInfo/${username}`);
      if (request.ok) {
        const userData = await request.json();
        setUser(userData);

        const eventsRequest = await fetch(`http://localhost:3300/getUserEvents/${userData.Email}`);
        if (eventsRequest.ok) {
          const userEventsData = await eventsRequest.json();
          setUserEvents(userEventsData);
          console.log("User Events: ", userEventsData);
        } else {
          console.error("Failed to fetch user events data");
        }
      } else {
        console.error("Failed to find user's general data");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <>
      <div>
        {user ? (
          <div className='profile'>
            <h1>Welcome {user.name}</h1>
            <h3> Current Email: {user.Email}</h3>
            <h2>Your Events:</h2>
            {userEvents.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        ) : (
          <p>No user Data</p>
        )}
      </div>
      <div className='profile'>
        <button className='btn-primary bt-9' onClick={handleSignOut}>Sign Out</button>
      </div>
    </>
  );
};

export default Profile;