class Point {
  constructor(name) {
    this.name = name;
  }

  static printStatic(_msg) {
    console.log(_msg)
  }


  printPrototpye(_msg) {
    console.log('_msg: ', _msg, 'this.name: ', this.name)
  }
}

Point.printStatic(' I love you ')
var _point = new Point('CONSTRUCTOR')
_point.printPrototpye(' I love you ')
