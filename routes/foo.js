var express = require('express')
var router = express.Router()
var bar = require('./bar')
var baz = require('./baz')

// GET /foo
router.get('/', function(req, res, next) {
  res.send('index for foo')
})

// GET /foo/bar
router.use('/bar', bar) // tells the router to use bar.js for child routes

// GET /foo/42
router.get('/:number', function(req, res, next) {
  res.send('this is foo #' + req.params.number)
})

// GET /foo/42/baz
router.use('/:number/baz', baz)

module.exports = router
