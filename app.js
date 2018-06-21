const createError = require('http-errors')
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mean-crud', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err))

const apiRouter = require('./routes/api')

const app = express()

// Middleware
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'dist/mean-crud')))
app.use('/', express.static(path.join(__dirname, 'dist/mean-crud')))
app.use('/api', apiRouter)

app.use((req, res,next) => {
    next(createError(404))
})

app.use((err, req, res ,next) => {
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    res.status(err.status || 500)
    res.send(err.status)
})

module.exports = app