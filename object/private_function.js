function Constructor(name) {
  this.userName = name;


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
}


var human = new Constructor('Peter');
//Error:
//human.Private();

human.Privileged();
human.Public('abc');

//from: http://www.crockford.com/javascript/private.html