const Sequelize = require('sequelize'); 
const db = require('../server/database/db'); 

module.exports = db.sequelize.define(
    'artist', 
    {
        id: {
            type: Sequelize.INTEGER, 
            primaryKey: true, 
            autoIncrement: true
        }, 
        stage_name : {
            type: Sequelize.STRING
        }, 
        first_name : {
            type: Sequelize.STRING
        }, 
        last_name : {
            type: Sequelize.STRING
        }, 
        dob : {
            type: Sequelize.DATE
        }, 
        dod : {
            type: Sequelize.DATE
        }, 
        hometown : {
            type: Sequelize.STRING
        }, 
        wikipage: {
            type: Sequelize.STRING
        }, 
        instagram: {
            type: Sequelize.STRING
        }, 
        twitter: {
            type: Sequelize.STRING
        }, 
        email: {
            type: Sequelize.STRING
        }
    }, 
    {
        freezeTableName: true
    }
)