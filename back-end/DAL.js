const {mongoose, Schema} = require("mongoose");
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

const connectionString = "mongodb+srv://Dev:ZSkgoYkHhMNwWHAI@api.neyvnyg.mongodb.net/Capstone";
//User  password = 1234

mongoose.connect(connectionString, {useUnifiedTopology: true, useNewUrlParser: true});

const VolunteerCollection = "VolunteerData";
const EmailCollection = "Emails";
const CharityCollection = "Charity";
const connection = mongoose.connection;

connection.once("open", () => {
    console.log("Mongoos is Connected");
});

const VolunteerData = new Schema(
    {
        ID: String,
        Name: String,
        Age: Number,
        Birthday: String,
        HoursTotal: Number,
        HoursRecent: Number
    },
    {collection: VolunteerCollection}
);


const VolunteerModel = mongoose.model("VolunteerData", VolunteerData);

const email = new Schema(
    {
        Email: String,
        Password: String,
        Username: String,
        Name: String
    },
    { collection: EmailCollection }
);

const emailModel = mongoose.model("Email",email);



const Charity = new Schema({
    CurrentTotal: Number,
    MostRecentDonation:Number,
    MostRecentPerson: Number, //Is a number because it is the _id of the user  
},{collection: CharityCollection});
const CharityModel = mongoose.model("Charity",Charity);


exports.DAL = {

  sendEmail: (data) => {

    const mailOptions = {
      from: 'your-email@gmail.com',
      to: data.email, // Replace with the volunteer's email
      subject: 'Volunteer Application Status',
      text: `Dear ${data.name},\n\nWe appreciate your interest in volunteering. ${
        data.accepted ? 'Congratulations! Your application has been accepted.' : 'We regret to inform you that your application has been rejected.'
      }\n\nThank you,\nQueer Depo Team`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
  
    //if they are accepted 


    //if they are rejected
  },



    addVolunteer: (data) => {
        //Add a Volunteer to the database as long as signed in

        //validate data 
      if(!data.ID || !data.Name || !data.Age || !data.Birthday){
            console.log("ID: ", data.ID)
            console.log("Name: ", data.Name)
            console.log("Age: ",data.Age)
            console.log("Birthday: ", data.Birthday)
          

            console.log("Something is missing. Please fill out every part")
        return 
       }
            let newVolunteer = {
                ID: data.ID,
                Name: data.Name,
                Age: data.Age,
                Birthday: data.Birthday,
                HoursRecent: data.HoursRecent,
                HoursTotal: data.HoursTotal
            };
   
       VolunteerModel.collection.insertOne(newVolunteer, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("New Volunteer!", newVolunteer);
      });
    },

    changeVolunteer: async (id, data) => {
        // Change something about the selected Volunteer as long as signed in
        try {
          console.log("Volunteer ID:", id);
          console.log("Updated Data:", data);
          const VolunteerData = await VolunteerModel.findOneAndUpdate({ _id: id }, data, { new: true });
          console.log("Updated Volunteer:", VolunteerData);
          return VolunteerData;
        } catch (error) {
          console.log(error);
        }
       // console.log("Chanigng things to " + id);


    },

    deleteVolunteer: async (_id) => {
        //lets signed in user remove a Volunteer from database
        try{
            
            console.log("Id to find",_id)
            const VolunteerDet = await VolunteerModel.findOneAndDelete({_id: _id}); //find  a record then delete it 
            console.log("Volunteer to be deleted",VolunteerDet);
            return VolunteerDet;
        } 
        catch(error){
              console.log(error);

        }
        console.log("Deleted", _id);
    
    },

    addToCharity: async (data) =>{
        //get the total of the amount rasied   121,165,189 according to 2021 
        //get the id of the person last donated
        //add the amount wanted to add in 
    },
    getTotal: async (data) => {

    },

    getCertainVolunteer: async (name) => {
        //Finds a specific Volunteer
        try{
            const Volunteer = await VolunteerModel.findOne({ID: ID})

            if(Volunteer){
                console.log("Volunteer Found: ", Volunteer)
                return Volunteer;
            }
            else{
                console.log("Volunteer not found");
                return null;
            } 
        }   
        catch(error){
            console.log(error);
            return null
        }

    },
    
    getVolunteerData: async () => {
        //Gets all the VolunteerData in the database 
        let filter = {};
        return await VolunteerModel.find(filter).exec(); 
    },
    
    checkEmails: async (email) => {
        //you search for specific email and if it is exists in the db
        console.log("New Email",email);
        const filter = {"Email": email};
       let result = await emailModel.findOne(filter).exec(); //exec will do the same as await
        
        return result;

    },


    addEmail: (emailData) => {
         //Validate Data 
         console.log("Email Data", emailData)
            let newEmail = {
                Email : emailData.Email,
                Password: emailData.Password, 
                Username: emailData.Username, 
                name: emailData.Name
            };
            console.log("Newest Email",newEmail);

            emailModel.collection.insertOne(newEmail);
         },

    
    checkPassword: async (username, password) => {
        //pull in the username and passwords then checks the pulled in password and compares it to the provided password 
         //if password does not match a message is sent saying the password is incorrect
   
        try {
            console.log("Username: ", username)
            console.log("Password: ", password)
          const user = await emailModel.findOne({ Username: username });
          if (!user) {
            // Email not found
            return { success: false, message: 'Username Not found' };
          }
    
          const match = await bcrypt.compare(password, user.Password);
          if (match) {
            // Passwords match
            return { success: true, message: 'Password matched' };
          } else {
            // Passwords do not match
            return { success: false, message: 'Incorrect password' };
          }
        } catch (error) {
          // Error occurred while comparing passwords
          return { success: false, message: 'Error occurred while comparing passwords' };
        }
      },
    
      checkUsername: async (username) => {
        try {
          const user = await emailModel.findOne({ Username: username });
          if (user) {
            // Username exists
            return { success: true, message: 'Username found' };
          } else {
            // Username does not exist
            return { success: false, message: 'Username is incorrect' };
          }
        } catch (error) {
          // Error occurred while checking the username
          return { success: false, message: 'Error occurred while checking the username' };
        }
      }
    
    }

