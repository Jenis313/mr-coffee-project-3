const express = require('express');
const app = express();
const data = require('./data');
const PORT = 3030;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const path = require('path');
const ejs = require('ejs')

// Load Routing level middlewares
const homeRouter = require('./controllers/home.controller');
const scheduleRouter = require('./controllers/schedule.controller');
const userRouter = require('./controllers/user.controller');

// template engine setup
app.set('view engine', ejs)
app.set('views', path.join(process.cwd(), 'views'))

// x-www-encoded files parser
app.use(express.urlencoded({
    extended: true
  }))

//   Routes
app.use('/', homeRouter)
app.use('/users', userRouter);
app.use('/schedules', scheduleRouter);


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