const express = require('express');
const {v4: uuid} = require('uuid');
const cors = require('cors');
const { DAL } = require('./DAL');

const port = 1313; 

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());




app.get("/", (req,res) => {
    //home page 
    res.json({Message: "Welcome to Crow's Flower Shop. Come visit our database full of flowers. Customize your own bouquet once you've signed up."})
})

app.get("/flowers", async (req,res) => {
    //all of the flowers 
    let flowers = await DAL.getFlowers();

    return res.json(flowers);
})

app.get("/find/:name", (req,res) => {
    //fid specific flower
    const name = req.params.name;
   return DAL.getCertainFlower(name);
})

app.put("/updateFlower/:id/:key", async (req,res) => {
    const key = req.params.key;
    console.log("ID", req.params.id)
    const isValid = await DAL.isKeyValid(key);

    if(isValid){
        const flower = {
            flowerID: req.params.id,
            Key: key
        };
        const updatedFlowerData = req.body; // Replace this with the correct object containing the updated flower data

        await DAL.changeFlower(flower.flowerID, updatedFlowerData);
    }
    else{
        res.status(401).json({Message: "Incorrect API Key. Please correct it or sign up for one"});
    }

})



app.post("/addFlower/:key", async (req,res) => {
    //add a flower 
    const key = req.params.key;
    const isValid = await DAL.isKeyValid(key);
    console.log(req.body);

    if(isValid){
        DAL.addFlower(req.body); 
        res.redirect("/flowers");
    }
    else{
        return res.status(404).json({error: "Invalid API Key"})
    }
})

app.delete("/remove/:id/:key", async (req,res) => {
    //remove a flower
    const key = req.params.key;
    const isValid = await DAL.isKeyValid(key);

    if(isValid){
        const flower = {
            flowerID: req.params.id,
            Key: key,
        };
        
        try{
        await DAL.deleteFlower(flower.flowerID); //waits for the function to finish
        console.log("It as deleted")
        }catch(err){
            console.log(err);
            res.status(500).json({ Message: "An error occurred while deleting the creature." });
        }
    } else {
        res.status(401).json({ Message: "Incorrect API Key. Please correct it or sign up for one" });
      }
})

app.post("/addTo/:key", async (req, res) => {
    const key = req.params.key;
    const isValid = await DAL.isKeyValid(key);
    console.log("Request Body: ",req.body);
  
    if (isValid) {
        const flowerData = req.body;
        if (
            !flowerData.Name ||
            !flowerData.Colors ||
            !flowerData.Foliage ||
            !flowerData.AmountofFlowers ||
            !flowerData.PrimaryFlower ||
            !flowerData.RibbonType ||
            !flowerData.Message ||
            !flowerData.Meaning
          ) {
            console.log("Flower Name", flowerData.Name);
            console.log("Colors: ", flowerData.Colors);
            console.log("Foliage: ", flowerData.Foliage);
            console.log("Amount", flowerData.AmountofFlowers);
            console.log("Primary: ", flowerData.PrimaryFlower);
            console.log("Ribbin: ", flowerData.RibbonType);
            console.log("Meeanging: ", flowerData.Meaning);
            console.log("Message: ", flowerData.Message);
          
            return res.status(400).json({ error: "Invalid Bouquet data" });
          }
    
        DAL.addToBouquet(flowerData);
        res.redirect(`/bouquet/${key}`);
      } else {
        return res.status(401).json({ error: "Invalid API Key" });
      }
});
  

app.delete("/removeFrom/:name/:key", async (req,res) => {
    //remove element from boquet
    const key = req.params.key;
    const isValid = await DAL.isKeyValid(key);

    if(isValid){
        const bouqet = {
            Name: req.params.name,
            Key: key,
        };
        try{
            await DAL.removeFromBouquet(bouqet.Name);
            res.redirect(`/bouquet/${key}`);

        }catch(err){
            console.log(err);
            res.status(500).json({ Message: "An error occurred while deleting the creature." });
        }
    } else {
        res.status(401).json({ Message: "Incorrect API Key. Please correct it or sign up for one" });
      }
    }
)

app.put("/updateTo/:id/:key", async (req,res) => {
    //Update something in the bounquet 
    const key = req.params.key;

    const isValid = await DAL.isKeyValid(key);

    if(isValid){
         const bouqet = {
        flowerID: req.params.id,
        Key: key
    };
    DAL.changeBouquet(bouqet);
    res.redirect(`/bouguet/${key}`);
    }
    else{
        res.status(401).json({Message: "Incorrect API Key. Please correct it or sign up for one"});
    }

})

app.get('/bouquet/:name/:key', async (req,res) => {
    //find specified named bouquet
    const key = req.params.key;
    const name = req.params.name;
    const isValid = await DAL.isKeyValid(key);
    console.log(req.params);

    if(isValid){
        DAL.currentBouquet(name)
        res.redirect(`/bouquet/${key}`)
        
    }
    else{
        return res.status(401).json({error: "Invalid API key"})
    }

})

app.get("/bouquet/:key", async (req,res) => {
    //All of the stored bouqets 
    const key = req.params.key;
    const isValid = await DAL.isKeyValid(key);

    if(isValid){
        DAL.bouquets();
    }
    else{
        return res.status(401).json({error: "Invalid API key"})
    }
})

app.post('/validate/:key', async (req,res) => {
    const key = req.params.key;
    const isValid = await DAL.isKeyValid(key);

    if(isValid){
        return res.json("Valid")
    }
    else{
        return res.json("Invalid")
    }

})


app.post('/register', async (req,res) => {
    const Data = req.body;

    console.log("Registering: ", Data);
    let results = await DAL.checkEmails(Data.Email);
    console.log("Results: ", results)

    if(!results){

        const key = uuid();
        console.log("Key: ",key)
        DAL.addEmail(Data,key)
        res.json(key)
    }
    else{
            res.json({Message: "Key Already exists", Key: results.Key})

    }
})











app.listen(port, () => {
    console.log("Listening on port", port)
})