var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('infoForm', { title: 'Info' });
});

router.post('/', function(req, res, next) {
  var info = { };
  res.render('info', { title: 'Info Received', data: info });
});

module.exports = router;
