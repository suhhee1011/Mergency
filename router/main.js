const express = require('express');
const router = express.Router();


    router.get("/emergency",(req,res)=>{
        res.render("emergency",{
            title: "emergency",
            headingInfo:"emergency",
            script:`<script src="/js/helper.js"></script>`,
            helper : false
        });
    });
    router.get("/",(req,res)=>{
        res.render("home",{
            title: "home",
            headingInfo:"home",
            helper : false
        });
    });
    router.get("/nearDoctor",(req,res)=>{
        res.render("nearDoctor",{
            title: "nearDoctor",
            headingInfo:"nearDoctor",
            script:`<script src="/js/nearDoctor.js"></script>`,
            helper : false
        });
    });
        

module.exports=router;