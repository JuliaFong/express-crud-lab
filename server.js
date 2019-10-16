const express = require('express');
const app = express ();
const Veggies = require('./Models/veggies.js');
const PORT = 3000;

app.get('/veggies', (req,res)=>{
    res.render('index.ejs',{
        veggies: Veggies
    });
});

app.listen(3000, () => {
    console.log("app is running on port:",
    3000);
});
