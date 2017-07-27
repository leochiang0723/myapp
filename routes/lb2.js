var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('lb2');
});

module.exports = router;