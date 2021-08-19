var express = require('express');
var router = express.Router();
var {con} = require('../app')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home - Veilsa' });
});

router.get('/aboutus', function(req, res, next) {
  res.render('aboutus', { title: 'Hakkımızda - Veilsa' });
});

router.get('/project/mobile', async(req, res) => {
  const mobil = await new Promise((resolve, reject) => {
    con.query(`SELECT * FROM mobile`, function (err, result) {
        if (err)
            reject(err);
        resolve(result);
    });
});

  res.render('project/mobile', { title: 'Projeler - Veilsa', mobile: mobil });
});

router.get('/project/web', async(req, res) => {
  const web = await new Promise((resolve, reject) => {
    con.query(`SELECT * FROM web`, function (err, result) {
        if (err)
            reject(err);
        resolve(result);
    });
});

  res.render('project/web', { title: 'Projeler - Veilsa', web: web });
});


module.exports = router;
