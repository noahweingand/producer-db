// beginning of the express server that will connect to the database, and make queries for us. 

const express = require('express'); 
const cors = require('cors'); 
const bodyParser = require('body-parser'); 
const { checkToken } = require('./authentication/middleware'); 

const app = express(); 

//MiddleWare dependencies with express
app.use(bodyParser.json());
app.use(cors()); 
app.use(bodyParser.urlencoded({ extended: false }))

// middleware for dumbass cors 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS"); 
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With"); 

    if('OPTIONS' === req.method){
        res.send(200); 
    }
    else{
        next();  
    }
})

// begin handle routes/accessing the server

const posts = require('./routes/api/posts'); 
app.use('/api/posts', posts);  // tell the server to look in our posts.js file for any routing that goes through there.

const users = require('./routes/api/Users');
app.use('/api/users', users);
const producers = require('./routes/api/producers'); 
app.use('/api/producers', checkToken, producers); 

const port = process.env.PORT || 8080;  // use whatever port the environment wants or 8088

app.listen(port, () => {
    console.log('server connected at ' + port);
}); 
