const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
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
        headingInfo:"Help Page",
        script:`<script src="/js/helper_onArrival.js"></script>`,
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
router.get("/bye",(req,res)=>{
    res.render("helper_notHelping",{
        title: "bye",
        headingInfo:"bye",
        helper : true
    });
});


module.exports=router;