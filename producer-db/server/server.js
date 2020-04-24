// beginning of the express server that will connect to the database, and make queries for us. 

const express = require('express'); 
const cors = require('cors'); 
const bodyParser = require('body-parser'); 

const app = express(); 

//MiddleWare dependencies with express
app.use(bodyParser.json());
app.use(cors()); 

// begin handle routes/accessing the server

const posts = require('./routes/api/posts'); 
app.use('/api/posts', posts);  // tell the server to look in our posts.js file for any routing that goes through there.

const port = process.env.PORT || 8088;  // use whatever port the environment wants or 8088

app.listen(port, () => {
    console.log('server connected at ' + port);
}); 
