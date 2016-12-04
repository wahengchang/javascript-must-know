var myStuff = (function() {
    var number = 0;
    var fn = {};
    fn.increment = function() {
        number++;
    };
    fn.decrement = function() {
        number--;
    };
    fn.doSomethingCrazy = function() {
        throw new Error('not implemented');
    }; // I want to specify later what this does.
    fn.doSomethingCrazyTwice = function() {
        fn.doSomethingCrazy();
        fn.doSomethingCrazy();
    };
    fn.getNumber = function() {
        return number;
    };
    return fn;
})();

myStuff.doSomethingCrazy = function() {
    this.increment();
    this.increment();
};
myStuff.doSomethingCrazyTwice();
console.log(myStuff.getNumber()); // console.logs '4'