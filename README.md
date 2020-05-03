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
* DB  
    * Remove email for producers/artists from db? Probably don't need it
    * FILL DAT BITCH NO CAP 😂
* Add 
    * add DOB as field
* Producer Page
    * styling
* Alex's List of things to do: 
    * Make procedure to insert credit link to songs so that we don't have a wild query on front end
    * Finish important inserts
    * Possibly make a trigger or something that won't allow inserts to the users table
    * Add functionality to update song reference to artist / producer

### Links for developing
