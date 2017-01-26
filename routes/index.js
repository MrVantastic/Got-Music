var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log('sup');
});

router.get('search', function(req, res) {
  console.log("yeh");
  console.log('hell yeh');
});

module.exports = router;
