var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home - Veilsa' });
});

router.get('/aboutus', function(req, res, next) {
  res.render('aboutus', { title: 'Hakkımızda - Veilsa' });
});


module.exports = router;
