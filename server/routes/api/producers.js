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

producers.post('/GetSongs', async (req, res) => {
    Producer.sequelize.query(
    `SELECT producerName, stageName, title from credits c JOIN producer p ON(c.producerID = p.ID) 
    JOIN song s ON(s.ID = c.songID) JOIN artist a ON(c.artistID = a.ID) WHERE producerName = ?`, 
    {
        replacements: req.body.params
    }).then( rows => res.send(rows)).catch(err => res.send(err)); 
})

module.exports = producers; 