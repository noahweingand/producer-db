# producer-db

## Project setup
Install dependencies.
```
npm install
```

### Run client
```
cd client
npm run serve
```
### Run server
```
cd server
node server.js
```
### General info
Node version: v12.16.2
Had to run npm install in client and server - Noah
### To do
* sanitize inputs?
* SEARCH
    * search so far: producer, artist, all
        * Still need: song, tag, tools
* Login
    * login form needs to be hit first and then pass state of logged in
* Clean up DB  
    * Remove email for producers/artists from db? Probably don't need it
* Alex's List of things to do: 
    * Make procedure to insert credit link to songs so that we don't have a wild query on front end
    * Make producer page - Noah
    * Make delete link on producer page
    * Finish important inserts
    * Make sql query to get all information about the producer
    * Possibly make a trigger or something that won't allow inserts to the users table 
    * Change the operating test_users table to the actual users table
    * Make producer name unique 
    * Clean the registration functionality 

### Links for developing
