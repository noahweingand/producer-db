var mysql = require('mysql'); 

var con = mysql.createConnection({
  host: "3.234.246.29", 
  user: "project_14", 
  password: 'V00763681', 
  database: "project_14"
}); 

con.connect(function(err){
  if(err){
    throw err; 
  }
  console.log("Connected to database!"); 
}); 

module.exports = con;
