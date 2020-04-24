const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 8088; 
app.use('/', express.static('../public/')); 

app.listen(port, () => {
    console.log('server connected at ' + port);
}); 
