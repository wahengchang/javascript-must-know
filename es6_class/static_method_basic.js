class A {
  constructor( input ) {
    this.loose = this.constructor.getResult( input );
    this.tight = A.getResult( input );
    console.log( this.scaledProperty, Object.getOwnPropertyDescriptor( A.prototype, "scaledProperty" ).get.call( this ) );
  }

  get scaledProperty() {
    return parseInt( this.loose ) * 100;
  }
  
  static getResult( input ) {
    return input * this.scale;
  }
  
  static get scale() {
    return 2;
  }
}

console.log('A.getResult(2): ', A.getResult(2))
let instanceA = new A( 4 );
console.log( "A.loose", instanceA.loose );
console.log( "A.tight", instanceA.tight );