const Sequelize = require('sequelize'); 
const db = require('../server/database/db'); 

module.exports = db.sequelize.define(
    'song', 
    {
        id: {
            type: Sequelize.INTEGER, 
            primaryKey: true, 
            autoIncrement: true
        }, 
        title : {
            type: Sequelize.STRING
        }, 
        length : {
            type: Sequelize.TIME
        }, 
        album : {
            type: Sequelize.STRING
        }, 
        genre : {
            type: Sequelize.STRING
        }
    }, 
    {
        freezeTableName: true
    }
)