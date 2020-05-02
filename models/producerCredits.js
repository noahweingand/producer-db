const Sequelize = require('sequelize'); 
const db = require('../server/database/db'); 

module.exports = db.sequelize.define(
    'producerCredits', 
    {
        producerID: {
            type: Sequelize.INTEGER, 
            primaryKey: true
        }, 
        songID : {
            type: Sequelize.INTEGER, 
            primaryKey: true
        }
    }, 
    {
        freezeTableName: true, 
        timestamps: false
    }
)