const express = require('express');
const router = express.Router();
router.route('/')
    .get((req, res, next) => {
        res.render('index.ejs');
    })
    .post((req, res, next) => {
        res.render('index.ejs');
    })
module.exports = router;