const express = require('express'); 
const mysql = require('mysql'); 
const router = express.Router(); 

// Get certain rows that we want
router.get('/', async (req, res) => {
    const posts = await makeConnection(); 

    await posts.query('SELECT * FROM test_table;', function(err, rows){
        if(err){
            console.log('Trouble querying the db'); 
            throw err; 
        }  
        res.send(rows); 
    }); 

})


async function makeConnection (){
    const con = await mysql.createConnection({
        host: "3.234.246.29", 
        user: "project_14", 
        password: 'V00763681', 
        database: "project_14"
    }); 
    return con; 
}; 

module.exports = router; 