const express = require ('express')

const app = express();

app.get('/health-checkup', function (req,res){
    const username= req.headers.username
    const password= req.headers.password
    console.log(password);
    
    if(username != "Aniketh" || password != "@1234"){
        res.status(700).json({
            "msg":"Input validation"
        })
    }else {
        res.json({
            msg : "All is good"
        })
    }

})

app.listen(3000)