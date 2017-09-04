class A {
    constructor( input ) {
        this.tight = this.constructor.getResult( input )
    }

    static getResult( input ) {
        return input * 2
    }
}

let instanceA = new A( 4 );
console.log( "A.tight", instanceA.tight );