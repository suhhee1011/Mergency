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


//TEST:




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
const patients = require("./model/patient");

//map each controller to the app object
app.use("/helper",helperController);
app.use("/",mainController);



//MONGODB
mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log(`Connected to MongoDB Database`);
})
.catch(err=>console.log(`Error occured when connecting to database ${err}`));

//set up server
const PORT = process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log("Web server is running");
    console.log(PORT);
});