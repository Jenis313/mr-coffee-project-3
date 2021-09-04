const express = require('express');
const router = express.Router();
const data = require('./../data')


const bcrypt = require('bcrypt');
const saltRounds = 10;

router.route('/')
    .get((req, res, next) => {
        // rebder all users
        res.render('all_users.ejs', {
            users: data.users
        })
    })
    .post((req, res, next) => {
        res.redirect('/')
    })
router.route('/new')
    .get((req, res, next) => {
        // render signup form
        console.log('new POST');
        res.render('register.ejs')
    })
    .post((req, res, next) => {
        // get data from request and do whatever you want 
        bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
            if(err){
                return next(err);
            }
            req.body.password = hash;
            data.users.push(req.body);
            res.json(req.body);
        });
    })

router.route('/:id')
    .get((req, res, next) => {
        console.log('req user data --> ',data.users[req.params.id])
        // get profile of a user
        res.render('profile.ejs', {
            user :  data.users[req.params.id]
        })
    })
module.exports = router;