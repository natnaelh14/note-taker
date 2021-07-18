// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
const path = require('path');
//To create an instance of Express router, we invoke the “.Router()” method 
const router = require('express').Router();

    router.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'))
    });
    
    router.get('*', (req, res) => {
        res.sendFile(path.join(__dirname,'../public/index.html'))
    })

    module.exports = router;
    