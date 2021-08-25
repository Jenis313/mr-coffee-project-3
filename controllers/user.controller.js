const express = require('express');
const router = express.Router();
const data = require('./../data')
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
        res.send(req.body)
        // get data from request and render
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