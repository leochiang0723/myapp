var express = require('express');
var router = express.Router();
var Member = require('../models/Member')



/* GET home page. */
/* router.get('/', function(req, res, next) {
    if (req.session.member){
        res.redirect('/');
    }
    res.render('index',{
        member:null
    });
}); */

router.get('/', function(req, res, next) {
    res.render('index');

});

module.exports = router;