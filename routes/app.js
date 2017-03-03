var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('node');
});

router.post('/message', function (req, res, next) {
    var message = req.body.message;
    res.redirect('/message/' + message);
});

module.exports = router;
