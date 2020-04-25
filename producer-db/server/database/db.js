// var mysql = require('mysql'); 

// var con = mysql.createConnection({
//   host: "3.234.246.29", 
//   user: "project_14", 
//   password: 'V00763681', 
//   database: "project_14"
// }); 

// con.connect(function(err){
//   if(err){
//     throw err; 
//   }
//   console.log("Connected to database!"); 
// }); 

// module.exports = con;

const Sequelize = require("sequelize")
const db = {}
const sequelize = new Sequelize("project_14", "project_14", "V00763681", {
  host: '3.234.246.29',
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db
