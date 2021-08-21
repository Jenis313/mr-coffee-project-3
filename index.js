const express = require('express');
const app = express();
const data = require('./data');
const PORT = 3030;
const bcrypt = require('bcrypt');
const saltRounds = 10;

// x-www-encoded files parser
app.use(express.urlencoded({
    extended: true
  }))

//   Get requests
app.get('/', (req, res, next) => {
    res.json({
        msg: 'Welcome to our schedule website!'
    })
})
app.get('/users', (req, res, next) => {
    res.json({
        users: data.users
    })
})
app.get('/schedules', (req, res, next) => {
    res.json({
        schedules: data.schedules
    })
})
app.get('/users/:id', (req, res, next) => {
    const userId = req.params.id;
    res.json({
        user : data.users[userId]
    })
})
app.get('/users/:id/schedules', (req, res, next) => {
    console.log('User Id in schedule 3 --> ',data.schedules[3].user_id);
    const userId = req.params.id;
    const schedules = data.schedules.filter((obj) => {
        return obj.user_id == userId
    })
    res.json({
        schedules: schedules
    })
})

// Post requests
app.post('/schedules', (req, res, next) => {
    data.schedules.push(req.body);
    res.json(req.body);
})
app.post('/users', (req, res, next) => {
    console.log('req body --> ', req.body);
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        if(err){
            return next(err);
        }
        req.body.password = hash;
        data.users.push(req.body);
        res.json(req.body);
    });
})

// Error handling middleware
app.use((req, res, next) => {
    next({
        msg: 'NOT FOUND',
        status: 404
    })
})

app.use((err, req, res, next) => {
    console.log('Error handling middleware in execution!!!!')
    res.json({
        msg: err.msg || err,
        status: err. status || 404
    })
})

app.listen(PORT, (err, done) => {
    if(err){
        console.log("Error in LISTEN");
        return
    }
    console.log("Listening at port ", PORT);
})