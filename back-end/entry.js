const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const {v4: uuid} = require('uuid');
const cors = require('cors');
const { DAL } = require('./DAL');
const bcrypt = require('bcrypt')
const port = 3300; 

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Configure session middleware
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false, // Set to true if you're using HTTPS
      httpOnly: true,
    },
  })
);


app.get("/", (req,res) => {
    //home page 
    res.json({Message: "Welcome to Crow's Flower Shop. Come visit our database full of flowers. Customize your own bouquet once you've signed up."})
})



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

    let username = await DAL.checkUsername(userData.Username); 
    let password = await DAL.checkPassword(userData.Username,userData.Password);
    console.log("Username: ", username)
    console.log("Password: ", password)
});



app.listen(port, () => {
    console.log("Listening on port", port)
})