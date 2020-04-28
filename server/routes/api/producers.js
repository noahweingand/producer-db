const express = require('express'); 
const producers = express.Router(); 
const db = require('../../database/db'); 

const Producer = require('../../../models/producer'); 


producers.get('/', async (req, res) =>  {
    Producer.sequelize.query('SELECT * FROM producer', {model: Producer, mapToModel: true})
    .then(rows => res.send(rows)).catch(err => res.send(err)); 
}); 


module.exports = producers; 