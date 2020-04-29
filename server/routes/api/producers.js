const express = require('express'); 
const producers = express.Router(); 

const Producer = require('../../../models/producer'); 

producers.post('/', async (req, res) =>  {
    console.log(req.body);
    Producer.findAll({   
        attributes: req.body.params
    })
    .then(rows => res.send(rows)).catch(err => res.send(err)); 
}); 

module.exports = producers; 