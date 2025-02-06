const express = require ('express')

const app = express()

const Users= [{
    name: "Aniketh",
    kidneys:[{
        healthy:true
    }]
}];

app.get('/',function(req,res){
    const anikethKidneys = Users[0].kidneys;
 
    const numberofKidneys= anikethKidneys.length;
    console.log(numberofKidneys);
    
    let numberofHealthyKidneys= 0;
    for (let i =0 ; i<anikethKidneys.length; i++){
        if(anikethKidneys[i].healthy){
            numberofHealthyKidneys = numberofHealthyKidneys+1;
        }
    }
    res.json({
        numberofKidneys,
        numberofHealthyKidneys
    })

    res.c
    
})
app.listen(3000);