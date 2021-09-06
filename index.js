// import
const express = require('express');

// instantiate server
const server = express();

// Configure routes
server.get ('/', function (req,res) {
    res.setHeader ('Content-Type', 'text/html');
    res.status(200).send('<h1>Bonjour sur mon serveur</h1>');
});

// launch server
server.listen(8080, function (){
    console.log('serveur en ecoute ');
});