const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const session = require('express-session');
require('dotenv').config({path:"./config/keys.env"});



const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.engine("handlebars",exphbs());
app.set("view engine", "handlebars");

mongoose.connect("mongodb+srv://admin-lmndang:nhat2601@cluster0.e8pu8.mongodb.net/medicalDB", {useNewUrlParser: true, useUnifiedTopology: true});

const patientsSchema = {
    firsrName: String,
    lastName: String,
    bof: String,
    address: String,
    phone: String,
    insuranceId: String,
    disability: String,
    medication: String
}

const doctorsSchema = {
    firsrName: String,
    lastName: String,
    address: String,
    phone: String,
    field: String
}

const helpersSchema = {
    firsrName: String,
    lastName: String,
    address: String,
    phone: String
}

const Helper = mongoose.model("helper", helpersSchema);

const helper1 = Helper(
    {
        firsrName: "John",
        lastName: "Smith",
        address: "97 Clinton St, Toronto, ON M6G 2Y4",
        phone: "4373335795"
    }
);

//helper1.save();


//app.use(fileUpload());
  

app.use(session({
    secret: `${process.env.SECRET_KEY}`,
    resave: false,
    saveUninitialized: true
  }))
  app.use((req,res,next)=>{
    res.locals.user = req.session.userInfo;
    next();

})

//load product model
const helperController = require("./router/helper");
const mainController = require("./router/main");
//map each controller to the app object
app.use("/helper",helperController);
app.use("/",mainController);



//MONGODB
// mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true})
// .then(()=>{
//     console.log(`Connected to MongoDB Database`);
// })
// .catch(err=>console.log(`Error occured when connecting to database ${err}`));

//set up server
const PORT = process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log("Web server is running");
    console.log(PORT);
});