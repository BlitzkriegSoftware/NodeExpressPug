var express = require('express');
var router = express.Router();

const { check, validationResult } = require('express-validator/check')
const { matchedData } = require('express-validator/filter')

router.get('/', function(req, res, next) {
  res.render('infoForm', { title: 'Info' });
});

router.post('/frm', 
[
  check('email')
    .isEmail()
    .withMessage('That email doesn‘t look right')
    .trim()
    .normalizeEmail(),
  check('password')
    .isLength({ min: 7 })
    .withMessage('Password must be 7 or more characters')
    .trim()
  ], 
  function(req, res, next) {
    const errors = validationResult(req);
    var errorMap = errors.mapped();
    var errorArray = unWindMessages(errorMap);

    var info = { };
    info.email = req.body.email;
    info.password = req.body.password;
    info.rememberme = req.body.rememberme;
    
    res.render('info', { title: 'Info Received', data: info,  errors: errorArray });
  }
);

function unWindMessages(em) {
  var m = [ ];

  for(var i in em) {
    m.push(em[i].msg);
  }

  return m;
}



module.exports = router;
