class A {
    constructor( input ) {
        this.tight = A.getResult( input )
    }

    static getResult( input ) {
        return input * 2
    }
}

console.log('A.getResult(2): ', A.getResult(2))
let instanceA = new A( 4 );
console.log( "A.tight", instanceA.tight );