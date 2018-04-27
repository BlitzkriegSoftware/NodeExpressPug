var express = require('express');
var router = express.Router();

// const { check, validationResult } = require('express-validator/check')
// const { matchedData } = require('express-validator/filter')

router.get('/', function(req, res, next) {
  res.render('infoForm', { title: 'Info' });
});

router.post('/frm', 
  function(req, res, next) {
    // const errors = validationResult(req)
    var info = { };
    info.email = req.body.email;
    info.password = req.body.password;
    info.rememberme = req.body.rememberme;
    // ,  errors: errors.mapped()
    res.render('info', { title: 'Info Received', data: info });
  }
);

module.exports = router;
