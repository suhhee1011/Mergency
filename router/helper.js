const express = require('express');
const router = express.Router();


router.get("/helpPage",(req,res)=>{
    res.render("helper_HelpPage",{
        title: "nearByClinic",
        headingInfo:"nearByClinic",
    });
});


module.exports=router;