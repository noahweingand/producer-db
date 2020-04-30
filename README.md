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
    * all search. Then a search for producer, artist, song, tag, tools
    * conditionally render list views at home
* User validation?
    * users need to be logged in to make post
    * login form needs to be hit first and then pass state of logged in
* Create, Update, Delete
    * need user to be logged in to do this
* Search results
* Clean up DB  
    * Remove email for producers/artists from db? Probably don't need it
    * Create import(create and inserts) and drop files from DB for easy cleaning/setting up

### Links for developing
