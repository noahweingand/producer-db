const express = require('express'); 
const producers = express.Router(); 

//make more secure backend when checking for errors in the inserts

const Producer = require('../../../models/producer'); 
const Artist = require('../../../models/artist'); 
const Song = require('../../../models/song'); 
const ProducerCredits = require('../../../models/producerCredits'); 
const ArtistCredits = require('../../../models/artistCredits'); 

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
    })}); 

producers.post('/addArtist', async(req, res) => {
    info = req.body.params
    console.log(info); 
    Artist.create({
        stageName: info.artistName, 
        firstName: info.first_name, 
        lastName: info.last_name, 
        hometown: info.city + ', ' + info.state, 
        wikiPage: info.wiki, 
        instagram: info.instagram, 
        twitter: info.twitter
    }).then((result) => res.send(result)).catch(err => {
        console.log(err); 
        res.send(err)
    })}); 

producers.post('/getAllArtists', async (req, res) =>  {
    
    Artist.findAll({   
        attributes: req.body.params
    }).then(rows => res.send(rows)).catch(err => res.send(err)); 
    });

producers.post('/searchProducers', async(req, res) => {
    Producer.sequelize.query("SELECT producerName, wikiPage FROM producer WHERE producerName LIKE ?", 
    {
        replacements: req.body.query
    }).then(rows => res.send(rows)).catch(err => res.send(err)); 
})

producers.post('/searchArtists', async(req, res) => {
    Producer.sequelize.query("SELECT stageName, wikiPage FROM artist WHERE stageName LIKE ?", 
    {
        replacements: req.body.query
    }).then( rows => res.send(rows)).catch(err => res.send(err)); 
})

producers.post('/GetSongs', async (req, res) => {
    Producer.sequelize.query(
        `SELECT p.producerName, a.stageName, s.title as 'Song Title', s.album FROM producer p JOIN producerCredits ON(producerID = p.ID)
        JOIN song s ON(songID = s.ID) JOIN artistCredits USING(songID) JOIN artist a ON(a.ID = artistID) WHERE p.producerName = ? `, 
    {
        replacements: req.body.params
    }).then( rows => res.send(rows)).catch(err => res.send(err)); 
})

producers.post('/AddSong', async (req, res) => {
    Song.create({
        title: req.body.params.songName, 
        length: req.body.params.song_length,
        album: req.body.params.album_name, 
        genre: req.body.params.genre
    }).then( (result) => {
        var songID = result.dataValues.id; // store the id of the newly created song
        const allProducers = req.body.params.producerNames; 
        const allArtists = req.body.params.artistNames; 

        for(let prod of allProducers){
            Producer.sequelize.query(`SELECT ID from producer WHERE producerName = ?`, {replacements: [prod]})
                .then( (result) => {
                   var prodID = result[0][0].ID; 

                   ProducerCredits.sequelize.query(`INSERT INTO producerCredits VALUES(?, ?)`, {replacements: [prodID, songID]})
                        .then((result) => { 
                            console.log('success') 
                        }).catch( (err) => console.log('Error submitting Producer Credits')); 
                }).catch((err) => console.log(err)); 
        }

        for(let artist of allArtists){
            Artist.sequelize.query(`SELECT ID from artist WHERE stageName = ?`, {replacements: [artist]})
                .then( (result) => {
                var artistID = result[0][0].ID; 

                ArtistCredits.sequelize.query(`INSERT INTO artistCredits VALUES(?, ?)`, {replacements: [artistID, songID]})
                        .then((result) => console.log('success') ).catch( (err) => console.log('Error submitting Producer Credits')); 
                }).catch((err) => console.log(err)); 
        }

        res.send(result); 
    }).catch( (err) => {
        console.log(err); 
        res.send(err); 
    }); 
}); 

producers.post('/GetProducerInfo', async(req, res) => {
    Producer.sequelize.query("SELECT firstName, lastName, getProducerAge(producerName) \"age\", dob \"Date of Birth\", hometown, wikiPage, instagram, twitter FROM producer WHERE producerName = ?", 
    {
        replacements: req.body.params
    }).then( rows => res.send(rows)).catch(err => res.send(err)); 
})

producers.post('/GetProducerDaws', async(req, res) => {
    Producer.sequelize.query("SELECT d1.name, d1.manufacturer FROM producer p JOIN usesDaw d ON(producerID = p.ID) JOIN daw d1 ON(dawID = d1.ID) WHERE producerName = ?",
    {
        replacements: req.body.params
    }).then( rows => res.send(rows)).catch(err => res.send(err)); 
})

producers.post('/deleteProducer', async(req, res) => {
    Producer.sequelize.query("DELETE FROM producer WHERE producerName = ?", 
    {
        replacements: req.body.params
    }).then( rows => {res.send(rows); console.log(res)}).catch(err => res.send(err)); 
})

module.exports = producers; 