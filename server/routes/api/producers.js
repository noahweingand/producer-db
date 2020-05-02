const express = require('express'); 
const producers = express.Router(); 

const Producer = require('../../../models/producer'); 

producers.post('/', async (req, res) =>  {
    Producer.findAll({   
        attributes: req.body.params
    })
    .then(rows => res.send(rows)).catch(err => res.send(err)); 
}); 

producers.post('/addProducer', async(req, res) => {
    info = req.body.params
    console.log(info); 
    Producer.create({
        producerName: info.producerName, 
        firstName: info.first_name, 
        lastName: info.last_name, 
        hometown: info.city + ', ' + info.state, 
        wikiPage: info.wiki, 
        instagram: info.instagram, 
        twitter: info.twitter
    }).then((result) => res.send(result)).catch(err => {
        console.log(err); 
        res.send(err)
    }); 
}); 

producers.post('/searchProducers', async(req, res) => {
    Producer.sequelize.query("SELECT producerName, wikiPage FROM producer WHERE producerName LIKE ?", 
    {
        replacements: req.body.query
    }).then( rows => res.send(rows)).catch(err => res.send(err)); 
})

producers.post('/searchArtists', async(req, res) => {
    Producer.sequelize.query("SELECT stageName, wikiPage FROM artist WHERE stageName LIKE ?", 
    {
        replacements: req.body.query
    }).then( rows => res.send(rows)).catch(err => res.send(err)); 
})

producers.post('/GetSongs', async (req, res) => {
    Producer.sequelize.query(
    `SELECT producerName as Producer, stageName as Artist, title, album, length from credits c JOIN producer p ON(c.producerID = p.ID) 
    JOIN song s ON(s.ID = c.songID) JOIN artist a ON(c.artistID = a.ID) WHERE producerName = ?`, 
    {
        replacements: req.body.params
    }).then( rows => res.send(rows)).catch(err => res.send(err)); 
})

module.exports = producers; 