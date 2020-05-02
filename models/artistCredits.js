const Sequelize = require('sequelize'); 
const db = require('../server/database/db'); 

module.exports = db.sequelize.define(
    'artistCredits', 
    {
        artistID: {
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