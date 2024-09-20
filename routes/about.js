const router = require('express').Router

router.get('about',(req,res)=>{
    res.send('this is the about page')

})

module.exports=router;