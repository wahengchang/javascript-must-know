class Point {
  constructor(name) {
    this.name = name;
  }

  //Point.printStatic
  static printStatic(_msg) {
    console.log(_msg)
  }

  //prototype
  printPrototpye(_msg) {
    console.log('_msg: ', _msg, 'this.name: ', this.name)
  }
}

Point.printStatic(' I love you ')
var _point = new Point('CONSTRUCTOR')
_point.printPrototpye(' I love you ')
