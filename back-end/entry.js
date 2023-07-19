const express = require('express');
const {v4: uuid} = require('uuid');
const cors = require('cors');
const { DAL } = require('./DAL');

const port = 3300; 

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());




app.get("/", (req,res) => {
    //home page 
    res.json({Message: "Welcome to Crow's Flower Shop. Come visit our database full of flowers. Customize your own bouquet once you've signed up."})
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