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
* Add 
    * router push to home when adding producer or artist
    * add DOB as field
* Alex's List of things to do: 
    * Make procedure to insert credit link to songs so that we don't have a wild query on front end
    * Make delete link on producer page
    * Finish important inserts
    * Possibly make a trigger or something that won't allow inserts to the users table

### Links for developing
