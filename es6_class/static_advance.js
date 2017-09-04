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
  
  class B extends A {
    constructor( input ) {
      super( input );
      this.tight = B.getResult( input ) + " (of B)";
    }
    
    get scaledProperty() {
      return parseInt( this.loose ) * 10000;
    }
  
    static get scale() {
      return 4;
    }
  }
  
  class C extends B {
    constructor( input ) {
      super( input );
    }
    
    static get scale() {
      return 5;
    }
  }
  
  class D extends C {
    constructor( input ) {
      super( input );
    }
    
    static getResult( input ) {
      return super.getResult( input ) + " (overridden)";
    }
    
    static get scale() {
      return 10;
    }
  }
  
  
  let instanceA = new A( 4 );
  console.log( "A.loose", instanceA.loose );
  console.log( "A.tight", instanceA.tight );
  
  let instanceB = new B( 4 );
  console.log( "B.loose", instanceB.loose );
  console.log( "B.tight", instanceB.tight );
  
  let instanceC = new C( 4 );
  console.log( "C.loose", instanceC.loose );
  console.log( "C.tight", instanceC.tight );
  
  let instanceD = new D( 4 );
  console.log( "D.loose", instanceD.loose );
  console.log( "D.tight", instanceD.tight );