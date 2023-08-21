const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const {v4: uuid} = require('uuid');
const cors = require('cors');
const { DAL } = require('./DAL');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const port = 3300; 

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


const generateSecretKey = () => {
  return crypto.randomBytes(16).toString('hex');
};
const secretKey = generateSecretKey(); // Generate your secret key

// Configure session middleware
app.use(
  session({
    secret: secretKey,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false, // Set to true if you're using HTTPS
      httpOnly: true,
    },
  })
);



app.post('/register', async (req,res) => {
    const userData = req.body;

    console.log("Registering: ", userData);
    let results = await DAL.checkEmails(userData.Email);
    console.log("Results: ", results)

    if (!results) {
        // Generate a salt and hash the password
        const saltRounds = 10;
        bcrypt.hash(userData.Password, saltRounds, async (error, hash) => {
          if (error) {
            // Handle the error appropriately
            console.error('Error hashing password:', error);
            res.status(500).json({ error: 'Internal Server Error' });
          } else {
            // Save the user with the hashed password
            const user = { ...userData, Password: hash };
            const savedUser = await DAL.addEmail(user)
            req.session.userId = savedUser._id; // Set userId in session after successful login
            console.log("Password", user.Password)
            DAL.addEmail(user);
          }
        });
    }
    else{
            res.json({Message: "Email Already in use"})

    }
});

app.post('/signin', async (req,res) => {
    const userData = req.body;
    console.log("Provided Information: ", userData)

    let username = await DAL.checkUsername(userData.username); 
    let password = await DAL.checkPassword(userData.username,userData.password);
    console.log("Username: ", username)
    console.log("Password: ", password)

    if (username.success && password.success) {
      console.log('Setting userId in session:', username._id);
      req.session.userId = username._id; // Set userId in session after successful login

      const token = jwt.sign({ username: userData.username }, secretKey, { expiresIn: '1h' });
      console.log("Token: ", token)
      res.json({ success: true, message: 'Successfully signed in', token: token });
    } else {
      res.json({ success: false, message: 'Invalid username or password' });
    }
});

app.post('/volunteer', async (req,res) => {
  const authHeader = req.headers.authorization;
    console.log("Authorization Header: ", authHeader)
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }
  console.log("Passed Authoeize")
  const token = req.headers.authorization.split(' ')[1]; // Extract the token part from the header
  console.log("Token split")
  console.log("Token", token)

  // Verify the token and extract user information if needed
  try {
    console.log("Starting to decript")
    const decodedToken = jwt.verify(token, secretKey);
    console.log('Decoded Token:', decodedToken); // Print the decoded token to check its content
    const userId = decodedToken.username; // For example, assuming 'username' is used in the token
    console.log('User ID:', userId); // Print the user ID to check its value

  //Take in the volunteer information 
  const volunteerData = req.body;

  if (!userId) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }
  
 
    await DAL.canVolunteer(userId, volunteerData);
    res.status(200).send('Volunteer information processed.'); 
}
  
  catch (error) {
    console.error('Error processing volunteer information:', error);
    res.status(500).send('Error processing volunteer information');
  }
});


app.listen(port, () => {
    console.log("Listening on port", port)
})