const { authUser, postExample } = require('../workers/auth/index.js');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/post/example', postExample)

module.exports = router;
