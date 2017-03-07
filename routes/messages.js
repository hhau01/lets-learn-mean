var express = require('express');
var router = express.Router();

var Message = require('../models/message');

router.post('/', function (req, res, next) {
    var message = new Message({
        content: req.body.content
    });
    message.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        // 201 - everything is ok
        res.status(201)({
            message: 'Saved message',
            obj: result
        });
    });
});

module.exports = router;
