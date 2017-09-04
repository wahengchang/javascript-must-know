class Printer {
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


var cat = new Printer()

console.log('Object.getPrototypeOf(cat): ' , Object.getPrototypeOf(cat))

console.log('cat.__proto__: ' , cat.__proto__)

console.log('cat.constructor.prototype: ' , cat.constructor.prototype)
