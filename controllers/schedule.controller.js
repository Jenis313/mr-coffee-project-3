const express = require('express');
const router = express.Router();
const data = require('./../models/db');
router.route('/')
    .get((req, res, next) => {
        // render all schedules
        data.any('SELECT * FROM schedule')
            .then((schedules) => {
                res.render('pages/all_schedules.ejs', {schedules})
            })
    })
router.route('/new')
    .get((req, res, next) => {
        // Render Form
        res.render('./pages/add_schedule.ejs');
    })
    .post((req, res, next) => {
        // Get form data and save into database
        const {username, day, start_time, end_time} = req.body;
        data.none("INSERT INTO schedule(username, day, start_time, end_time) VALUES ($1, $2, $3, $4)", [username, day, start_time, end_time])
            .then(() => {
                res.redirect('new')
            })
            .catch((err) => {
                console.log(err);
                next(err);
            })
    })
module.exports = router;