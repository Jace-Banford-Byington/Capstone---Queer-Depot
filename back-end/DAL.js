const {mongoose, Schema} = require("mongoose");


const connectionString = "mongodb+srv://Dev:ZSkgoYkHhMNwWHAI@api.neyvnyg.mongodb.net/Final";
//User  password = 1234

mongoose.connect(connectionString, {useUnifiedTopology: true, useNewUrlParser: true});

const FlowersCollection = "Flowers";
const BouquetCollection = "Bouquet";
const EmailCollection = "Emails";
const connection = mongoose.connection;

connection.once("open", () => {
    console.log("Mongoos is Connected");
});

const flowers = new Schema(
    {
        CommonName: String, 
        ScienceName: String,
        TypeofFlower: String,
        Image: String,
        Represents: String,
        Uses: String
    },
    {collection: FlowersCollection}
);


const flowerModel = mongoose.model("Flowers", flowers);


const bouquet = new Schema(
    {
        Name: String,
        Colors: String,
        Foliage: String,
        AmountofFlowers: Number,
        PrimaryFlower: String,
        RibbonType: String,
        Message: String,
        Meaning: String
    },
    {collection: BouquetCollection}
);

const bouquetModel = mongoose.model("Bouquet", bouquet);

const email = new Schema(
    {
        Email: String,
        Key: String,
        Username: String,
        Name: String
    },
    { collection: EmailCollection }
);

const emailModel = mongoose.model("Email",email);

exports.DAL = {
    addFlower: (data) => {
        //Add a flower to the database as long as signed in

        //validate data 
       if(!data.CommonName || !data.ScienceName || !data.TypeofFlower || !data.Image || !data.Represents || !data.Uses){
        console.log("Common Name: ", data.CommonName)
        console.log("Scientific Name: ", data.ScienceName)
        console.log("Type of Floower: ", data.TypeofFlower)
        console.log("Image: ", data.Image)
        console.log("Represents: ", data.Represents)
        console.log("Uses: ", data.Uses)

        console.log("Something is missing. Please fill out every part")
        return 
       }

       let newFlower = {
        CommonName: data.CommonName,
        ScienceName: data.ScienceName,
        TypeofFlower: data.TypeofFlower,
        Image: data.Image,
        Represents: data.Represents,
        Uses: data.Uses
       };

       flowerModel.collection.insertOne(newFlower, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("New Flower!", newFlower);
      });
    },

    changeFlower: async (id, data) => {
        // Change something about the selected flower as long as signed in
        try {
          console.log("Flower ID:", id);
          console.log("Updated Data:", data);
          const flowerData = await flowerModel.findOneAndUpdate({ _id: id }, data, { new: true });
          console.log("Updated Flower:", flowerData);
          return flowerData;
        } catch (error) {
          console.log(error);
        }
       // console.log("Chanigng things to " + id);


    },

    deleteFlower: async (_id) => {
        //lets signed in user remove a flower from database
        try{
            
            console.log("Id to find",_id)
            const flowerDet = await flowerModel.findOneAndDelete({_id: _id}); //find  a record then delete it 
            console.log("Flower to be deleted",flowerDet);
            return flowerDet;
        } 
        catch(error){
              console.log(error);

        }
        console.log("Deleted", _id);
    
    },


    getCertainFlower: async (name) => {
        //Finds a specific flower
        try{
            const flower = await flowerModel.findOne({CommonName: name})

            if(flower){
                console.log("Flower Found: ", flower)
                return flower;
            }
            else{
                console.log("Flower not found");
                return null;
            } 
        }   
        catch(error){
            console.log(error);
            return null
        }

    },
    
    getFlowers: async () => {
        //Gets all the flowers in the database 
        let filter = {};
        return await flowerModel.find(filter).exec(); 
    },
    
    addToBouquet: (data) => {
        // Add an element to the bouquet
        if (
          !data.Name ||
          !data.Colors ||
          !data.Foliage ||
          !data.AmountofFlowers ||
          !data.PrimaryFlower ||
          !data.RibbonType ||
          !data.Message ||
          !data.Meaning
        ) {
          console.log("Name: ", data.Name);
          console.log("Colors: ", data.Colors);
          console.log("Foliage: ", data.Foliage);
          console.log("Amount of Flowers: ", data.AmountofFlowers);
          console.log("Primary Flower: ", data.PrimaryFlower);
          console.log("Ribbon: ", data.RibbonType);
          console.log("Message: ", data.Message);
          console.log("Meaning: ", data.Meaning);
          console.log("Something is missing. Please fill out every part");
          return;
        }
      
        let newBouquet = {
          Name: data.Name,
          Colors: data.Colors,
          Foliage: data.Foliage,
          AmountofFlowers: data.AmountofFlowers,
          PrimaryFlower: data.PrimaryFlower,
          RibbonType: data.RibbonType,
          Message: data.Message,
          Meaning: data.Meaning
        };
      
        bouquetModel.collection.insertOne(newBouquet, (err, result) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log("Bouquet created:", result);
        });
      },
      

    
    removeFromBouquet: async (name) => {
        //Removes an element from bouquet
        try{
            
            console.log(name)
            const bouquetDet = await bouquetModel.findOneAndDelete({Name: name}); //find  a record then delete it 
            console.log("Creature to be deleted",bouquetDet);
            return bouquetDet;
        } 
        catch(error){
              console.log(error);

        }
        console.log("Deleted", name);
    },
    
    changeBouquet: async (name, data) => {
        try{
            
            console.log("My Name", name)
            console.log("My Data" ,data)
            const BouData = await bouquetModel.findOneAndUpdate({Name: name},data,{new: true}); //find  a record and update it with the current data
            console.log(BouData);
            return BouData;
        } 
        catch(error){
              console.log(error);

        }
       // console.log("Chanigng things to " + id);

    },


    currentBouquet: async (name) => {
        //Gets the signed in users current bouquet
        try{
            const bouquet = await bouquetModel.findOne({Name: name})

            if(bouquet){
                console.log("Bouquet Found! ", bouquet)
                return bouquet
            }
            else{
                console.log("Not Found")
            }
        }
        catch(error){
            console.log(error);
            return null;
        }
       
    },
    
    bouquets: async () => {
        let filter = {};
        return await bouquetModel.find(filter).exec();
    },

    isKeyValid: async (key) => {
        //sees if the api key that user provided is stored to make sure the user can access the secure parts of api 
        console.log("IS KEY VALID??: " + key);
        
        try{
            const record = await emailModel.findOne({Key: key});

        //if one exists and is active return true 
                if(record){
                    console.log(key, " Does exist");
                    return true;
                }

        //else return false 
        else{
            console.log(key, " Does not exist");
            return false;
        }

        }
        catch(error){
            console.log("Error", error)
            return false;
        }
        //ask db for record where key = key 
        
       
    },
    checkEmails: async (email) => {
        //you search for specific email and if it is exists in the db
        console.log("New Email",email);
        const filter = {"Email": email};
       let result = await emailModel.findOne(filter).exec(); //exec will do the same as await
        
        return result;

    },

    addEmail: (emailData, key) => {
         //Validate Data 
         console.log("Email Data", emailData)
            let newEmail = {
                Email : emailData.Email,
                Key: key, 
                Username: emailData.Username, 
                name: emailData.Name
            };
            console.log("Newest Email",newEmail);

            emailModel.collection.insertOne(newEmail);
         },
}
