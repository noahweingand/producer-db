const express = require("express")
const users = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { secret } = require('../../authentication/secret'); 

const User = require("../../../models/User")
users.use(cors())

process.env.SECRET_KEY = secret; 

const checkValidEmail = function(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    return re.test(email); 
}

users.post("/register", (req, res) => {
    // need to check if user actually submitted data in each field
    const today = new Date().toJSON();
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        created: today
    }

    if(!checkValidEmail(userData.email)){
        res.json({
            status: 'Email not valid!', 
            failed: true
        }); 
        return 
    }else if(userData.password.trim() === ''){
        res.json({
            status: 'Please use a password', 
            failed: true
        })
        return 
    }

    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if(!user && userData.password.trim() !== '') {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                userData.password = hash
                User.create(userData)
                    .then(user => {
                        res.json({
                            status: user.email + ' registered!', 
                            failed: false
                        })
                    })
                    .catch(err => {
                        res.send('error: ' + err)
                    })
            })
        }
        else {
            res.json({
                status: 'User already exists', 
                failed: true
            })
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})

users.post("/login", (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if(user) {
            if(bcrypt.compareSync(req.body.password, user.password)) {
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    expiresIn: 1440
                })
                console.log('logged in')
                console.log(token); 
                res.send(token); 
            }
        }
        else {
            console.log('not logged in')
            res.status(400).json({error: 'User does not exist'})
        }
    })
    .catch(err => {
        res.status(400).json({error: err})
    })
})
module.exports = users
