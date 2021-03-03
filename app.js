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

//Connect to database
mongoose.connect("mongodb+srv://admin-lmndang:nhat2601@cluster0.e8pu8.mongodb.net/medicalDB", {useNewUrlParser: true, useUnifiedTopology: true});

//Schema of address
const addressesSchema = {
    id: Number,
    streetName: String,
    city: String,
    province: String,
    postalCode: String,
    country: String,
    latitude: Number,
    longitude: Number
}

//Schema of patient
const patientsSchema = {
    id: Number,
    firstName: String,
    lastName: String,
    bob: String,
    gender: String,
    email: String,
    address: addressesSchema,
    phone: String,
    disability: String,
}

//Schema of helper
const helpersSchema = {
    id: Number,
    firstName: String,
    lastName: String,
    address: addressesSchema,
    phone: String
}

//Schema of doctor
const doctorsSchema = {
    id: Number,
    firstName: String,
    lastName: String,
    address: addressesSchema,
    phone: String,
    field: String
}

//Create colections
const Address = mongoose.model("addrss", addressesSchema);
const Patient = mongoose.model("patient", patientsSchema);
const Helper = mongoose.model("helper", helpersSchema);
const Doctor = mongoose.model("doctor", doctorsSchema);


//app.use(fileUpload());
  

//Get all patients from database:
Patient.find({}, function(err, foundPatient)
{
    foundPatient.forEach(patient => {
        //console.log(patient);
    });
});


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