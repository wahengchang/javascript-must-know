function Constructor(_name, _callback) {
  this.userName = _name;
  this.callback = _callback;


  function Private(_name) {
    console.log('this.userName: ', _name)
  }
  // Private(this.userName);

  this.Privileged = function(_string) {
    Private(this.userName +' '+ _string);
  }
}

Constructor.prototype.Public = function (_string) {
    this.Privileged(_string);
    this.callback(_string);
}

var fun1 = function(_secondName){
  console.log('_secondName: ', _secondName);
}

var human = new Constructor('Peter', fun1);
//Error:
//human.Private();

human.Privileged();
human.Public('abc');

//from: http://www.crockford.com/javascript/private.html