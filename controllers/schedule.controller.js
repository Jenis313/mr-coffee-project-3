const express = require('express');
const router = express.Router();
const data = require('./../data');

router.route('/')
    .get((req, res, next) => {
        // render all schedules
        res.render('all_schedules.ejs', {
            schedules: data.schedules
        })
    })
    .post((req, res, next) => {
        res.redirect('/')
    })
router.route('/new')
    .get((req, res, next) => {
        const users = data.users;
        console.log(users);
        // render add schedule form
        res.render('add_schedule.ejs', {users});
    })
    .post((req, res, next) => {
        console.log(req.body)
        res.render('all_schedules.ejs', {schedules: [req.body]});
        // get data form request body and render
    })

router.route('/:id')
    .get((req, res, next) => {
        // render schedules of a user
        const schedules = data.schedules.filter((schedule) => {
            return schedule.user_id == req.params.id;
        })
        res.render('user_schedules.ejs', {
            schedules,
            user: data.users[req.params.id]
        })
    })
module.exports = router;