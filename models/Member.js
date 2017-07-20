var db = require('../libs/db');
var errors = require('../errors/GeneralErrors')

var Member = function(options) {
    this.id = options.id;
    this.name = options.name;
    this.account = optiions.account;
    this.password = options.password;
};

Member.validation = function(acc,pass){
    return db('member')
    .select
}

 Member.get = function(id,cb){
		if (this.id){
			db("members")
			.where({
				id : this.id,
				account : this.account,
				password : this.password
			})
			.then(function(){
				cb(null, this);
			}.bind(this))
			.catch(function(err){
				console.log("Login Success");
			});
		}
	}; 
/* Member.prototype.save = function(cb) { 			//註冊用
    if (this.id) {
        db("member")
            .where({
                id: this.id
            })
            .update({
                name: this.name,
                account: this.account,
                password: this.password,

            })
            .then(function() {
                cb(null, this);
            }.bind(this))
            .catch(function(err) {
                console.log("Member Updated", err);
                cb(new GeneralErrors.Database());
            });
    } else {
        db("member")
            .insert({
                name: this.name,
                account: this.account,
                password: this.password
            })
            .then(function(result) {
                var insertedId = result[0];
                this.id = insertedId;
                cb(null, this);
            }.bind(this))
            .catch(function(err) {
                console.log("Member Insert", err);
                cb(new GeneralErrors.Database());
            });
    }
}; */


module.exports = Member;