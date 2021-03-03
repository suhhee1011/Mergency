const express = require('express');
const router = express.Router();


router.get("/nearByClinic",(req,res)=>{
    res.render("nearByClinic",{
        title: "nearByClinic",
        headingInfo:"nearByClinic",
    });
});

router.get("/done",(req,res)=>{
    res.send("finish helping one person");
})
module.exports=router;