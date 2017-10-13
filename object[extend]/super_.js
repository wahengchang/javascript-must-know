var util = require('util')

/**************************************/
function BaseModel(name, password) { 
    this.name = name
    this.password = password
}

BaseModel.prototype.getInfor = function () {
    return {
        name: this.name,
        password: this.password
    }
 };

module.exports = BaseModel;

/**************************************/

function UserModel() {
    UserModel.super_.apply(this, arguments);
}

UserModel.prototype.setUsername = function(newName){
    this.name = newName
}
util.inherits(UserModel, BaseModel);





var baseIns = new BaseModel('peterBase', 'pwBase')
console.log('baseIns.getInfor(): ', baseIns.getInfor())

console.log('--------------')

var userIns = new UserModel('peter', 'pw')
console.log('userIns.getInfor(): ', userIns.getInfor())
console.log(' updated username ...')
userIns.setUsername('New Peter')
console.log('userIns.getInfor(): ', userIns.getInfor())
