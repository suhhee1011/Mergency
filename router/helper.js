const express = require('express');
const router = express.Router();

router.get("/confirm",(req,res)=>{
    res.render("helper_confirmHelp",{
        title: "nearByClinic",
        headingInfo:"nearByClinic",
        script:`<script src="/js/helper_confirmHelp.js"></script>`,
        helper : true
    });
});

router.get("/helpPage",(req,res)=>{
    res.render("helper_HelpPage",{
        title: "nearByClinic",
        headingInfo:"nearByClinic",
        script:`<script src="/js/helper_nearByClinic.js"></script>`,
        helper : true
    });
});

router.get("/nearByClinic",(req,res)=>{
    res.render("helper_nearByClinic",{
        title: "nearByClinic",
        headingInfo:"nearByClinic",
        script:`<script src="/js/helper_nearByClinic.js"></script>`,
        helper : true
    });
});

router.get("/thankyou",(req,res)=>{
    res.render("helper_thankyou",{
        title: "Thank You",
        headingInfo:"Thank You",
        helper : true
    });
});


module.exports=router;