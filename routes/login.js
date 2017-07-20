var express = require('express');
var router = express.Router();
var Member = require('../models/Member');
var GeneralErros = require('../errors/GeneralErrors');

router.get('/', function(req, res, next) {
    res.render('login');
});

router.post('/login', function(req, res) {
    var account = req.body.account,
        name = req.body.name,
        password = req.body.password;
    Users.findOne({
        account: account,
        password: password
    }, function(err, user) {
        if (user != null) {
            console.log(account + 'just Logged in!');
            res.send({
                welcome: '歡迎' + name,
                name: name,
                id: id,
                verification: 'yes'
            });
        } else {
            console.log('user not found');
            res.send({
                welcome: '帳號或密碼錯誤',
                verification: 'no'
            });
        }
    });
});

module.exports = router;