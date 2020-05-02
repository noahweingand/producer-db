const Sequelize = require('sequelize'); 
const db = require('../server/database/db'); 

module.exports = db.sequelize.define(
    'vst', 
    {
        id: {
            type: Sequelize.INTEGER, 
            primaryKey: true, 
            autoIncrement: true
        }, 
        name : {
            type: Sequelize.STRING
        }, 
        manufacturer : {
            type: Sequelize.STRING
        }
    }, 
    {
        freezeTableName: true
    }
)