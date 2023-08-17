const {mongoose, Schema} = require("mongoose");
const bcrypt = require('bcrypt')
const nodemailer = require('emailjs');
const { google } = require('googleapis')
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

const creditionalFile = './back-end/client_secret_498036337129-mlasge43td1h1ggkk4mjth5nr973f4ov.apps.googleusercontent.com.json';
const connectionString = "mongodb+srv://Dev:ZSkgoYkHhMNwWHAI@api.neyvnyg.mongodb.net/Capstone";
//User  password = 1234

mongoose.connect(connectionString, {useUnifiedTopology: true, useNewUrlParser: true});

const VolunteerCollection = "Volunteer Data";
const EmailCollection = "Emails";
const CharityCollection = "Charity";
const connection = mongoose.connection;

connection.once("open", () => {
    console.log("Mongoos is Connected");
});

const VolunteerData = new Schema(
    {
        ID: String,
        Email: String,
        LegalName: String,
        PreferredName: String,
        Age: Number,
        Birthday: String,
        
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
  countRecords: async () => {
    const volunteers = await VolunteerModel.countDocuments();
    console.log("Total Records: ", volunteers)
    return volunteers;
  },

    sendEmail: async (data, message) => {
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          type: 'OAuth2', ///498036337129-mlasge43td1h1ggkk4mjth5nr973f4ov.apps.googleusercontent.com
          user: 'queerdepo@gmail.com',
          clientId: '498036337129-mlasge43td1h1ggkk4mjth5nr973f4ov.apps.googleusercontent.com',
          clientSecret: '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',
          pass: 'CapstoneProject', 
        },
      });
      const mailOptions = {
        from: 'queerdepo@gmail.com',
        to: data.Email, // Replace with the volunteer's email
        subject: 'Volunteer Application Status',
        text: `Dear ${data.PreferredName } \n ${message} \n, The Queer Depo Team. ` ,
      };
      
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });
    },

    canVolunteer: async (data) => {
      const records = await exports.DAL.countRecords()
      console.log("Data recieved",data)
      if( !data.LegalName ||!data.PreferredName ||!data.Age || !data.Birthday){
        console.log("Legal Name: ", data.LegalName)
        console.log("Prefered Name: ", data.PreferredName)
        console.log("Age: ", data.Age)
        console.log("Birthday: ", data.Birthday)
        console.log("Something is missing")
        return;
      }

            if(data.Age > 20){
                message = "We are sorry to inform you that you are too old to be a volunteer here, this position is for younger people feel free to apply for a job"
              // 
                
            }
            if (data.Age < 10){
              message  = "I am so sorry you are too young to volunteer here. "
             
            }

            //if there 20 volunteers in the database reject the rest of the applications
            if(records < 20 ){
              message = "We are sorry to inform you that, due to our small location we can not have more than 20 volunteers at a time"
            }
            else {
              message = "Congratulations you have been approved to be a volunteer. ";
                addVolunteer(data)
            }
            exports.DAL.sendEmail(data.Email, message)
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