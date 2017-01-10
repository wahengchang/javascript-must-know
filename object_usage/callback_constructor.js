function Constructor(_name, _callback) {
  this.userName = _name;
  this.callback = _callback;


  function Private(_name) {
    this.callback('Private: ', _name)
  }

  function PrivateCallPrivileged(_name) {
    this.Privileged('PrivateCallPrivileged: ')
  }

  this.Privileged = function() {
    this.callback('Privileged: ', this.userName)
  }
}

Constructor.prototype.Public = function (_string) {
    this.callback('Public: ', this.userName)
}


var fun1 = function(_name){
  console.log('_name: ', _name);
}

var human = new Constructor('Peter', fun1);
//Error:
//human.Private();
human.Privileged();
human.Public();