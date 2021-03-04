const express = require('express');
const router = express.Router();

    router.get("/appointment",(req,res)=>{
        res.render("appointment",{
            title: "appointment",
            headingInfo:"appointment",
        });
    });
    router.get("/emergency",(req,res)=>{
        res.render("emergency",{
            title: "emergency",
            headingInfo:"emergency",
        });
    });
    router.get("/",(req,res)=>{
        res.render("home",{
            title: "home",
            headingInfo:"home",
        });
    });
    router.get("/nearByClinic",(req,res)=>{
        res.render("nearByClinic",{
            title: "nearByClinic",
            headingInfo:"nearByClinic",
        });
    });
        

module.exports=router;