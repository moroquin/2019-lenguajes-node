
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/',(req,res) => {
    res.render('index',{max:15});
});

router.get('/hola',(req,res) => {
    //res.sendFile(path.join(__dirname,'/views/saludo.html'));
    res.render('saludo');
});

module.exports = router;

