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
    import jwt_decode from 'jwt-decode';

const Profile = () => {
    const [user, setUser] = useState(null)

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

  return (
    <div>
        {user ? (
            <div>
                <h1>Welcome {user.name}</h1>    
                    <h2>Username: {user.Username}</h2> <button>Change Username</button>
                    <p>Email: {user.Email}</p>
                    <button>Update Email</button>
                    <button>Change Password</button>



                    <button>Sign Out</button>

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