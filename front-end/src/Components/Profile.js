//where the user can see all their personal info and is able to change it 

//Sign Out from here 
//Can see amount of money donated 
//they can upload profle picture 
//are they registered as a volunteer? 


//view Username - 
    //Able to change username 

//Change Password 
    //Have to enter the current password before being able to see the new password option 

//
    import React, { useState, useEffect } from 'react';
    import { NavLink, useNavigate } from 'react-router-dom';
    import jwt_decode from 'jwt-decode';

const Profile = () => {
    const [user, setUser] = useState(null)
    const [userEvents, setUserEvents] = useState([]);
    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem('token')
        navigate('/SignIn')
        window.location.reload()
      }
    useEffect(() => {
        const token = localStorage.getItem('token');

        if(token){
            try{
                const decodedToken = jwt_decode(token)
                console.log("Decoded Token: ", decodedToken)
                    fetchUser(decodedToken.username)
                console.log(user);
            }
            catch(err){
                console.error("Cannot decode token: ", err)
            }
        }
    }, []);

    const fetchUser = async (username) => {
        try {
            const request = await fetch(`http://localhost:3300/getInfo/${username}`);
            if (request.ok) {
                const userData = await request.json();
                setUser(userData);
    
                // Fetch user's events using a separate API endpoint
                const eventsRequest = await fetch(`http://localhost:3300/getUserEvents/${userData.Email}`);
                if (eventsRequest.ok) {
                    const userEventsData = await eventsRequest.json();
                    setUserEvents(userEventsData);
                } else {
                    console.error("Failed to fetch user events data");
                }
            } else {
                console.error("Failed to find user's general data");
            }
        } catch (error) {
            console.log("Error: ", error);
        }
    }

  return (
    <div>
        {user ? (
            <div>
                <h1>Welcome {user.name}</h1>    
                    <h2>Username: {user.Username}</h2> <button>Change Username</button>
                    <p>Email: {user.Email}</p>
                    <button>Update Email</button>

                    <h2>Your Events:</h2>
            <ul>
                {userEvents.map((event) => (
                    <li key={event._id}>{event.Name}</li>
                ))}
            </ul>



                    <input 
                        className=''
                        type='text'
                    />
                    <button>Change Password</button>



                    <button className='signout' onClick={handleSignOut}>Sign Out</button>

                    <button>Delete Account</button>
                </div>
        ) : (

            <p>No user Data</p>
        )
        }
    </div>

  )
}

export default Profile