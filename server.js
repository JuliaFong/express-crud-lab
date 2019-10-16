const express = require('express');
const app = express ();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const Veggies = require('./Models/veggies.js');
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));


app.get('/veggies', (req,res)=>{
    res.render('index.ejs',{
        veggies: Veggies
    });
});

app.get('/veggies/:index', (req, res) => {
    res.render('show.ejs',{
        veg: Veggies[req.params.index]
    })
})

app.delete('/veggies/:index', (req, res) => {
    Veggies.splice(req.params.index, 1);
    res.redirect('/veggies');
})

app.listen(3000, () => {
    console.log("app is running on port:",
    3000);
});
