const Sequelize = require('sequelize'); 
const db = require('../server/database/db'); 

// need to setup connection with the database in order to get the producer information

module.exports = db.sequelize.define(
    'producer', 
    {
        id: {
            type: Sequelize.INTEGER, 
            primaryKey: true, 
            autoIncrement: true
        }, 
        producerName : {
            type: Sequelize.STRING
        }, 
        firstName : {
            type: Sequelize.STRING
        }, 
        lastName : {
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
        wikiPage: {
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
        freezeTableName: true, 
        timestamps: false
    }
)