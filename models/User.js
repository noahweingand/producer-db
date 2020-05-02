const Sequelize = require("sequelize")
const db = require("../server/database/db")

module.exports = db.sequelize.define(
    'test_users', //change this to users when we're done testing
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        created: {
            type: Sequelize.STRING,
            defaultValue: Sequelize.NOW
        }
    },
    {
        timestamps: false
    }
)