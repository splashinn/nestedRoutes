var express = require('express')
var router = express.Router({mergeParams: true}) // don't forget the parent params

// GET /foo/42/baz
router.get('/', function(req, res, next) {
  // the param name is from the parent as well
  res.send('this is the baz for foo #' + req.params.number);
})

// GET /foo/42/baz/123
router.get('/:id', function(req, res, next) {
  res.send('baz #' + req.params.id + ' for foo #' + req.params.number)
})

module.exports = router
