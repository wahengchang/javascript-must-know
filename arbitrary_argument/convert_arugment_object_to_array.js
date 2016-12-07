function foo() {
    var args = [].slice.call(arguments);
    // SAME
    // var args = Array.prototype.slice.call(arguments);

    sorted = args.sort()
    console.log(sorted)
}

foo(4,1,2,3)
foo(1)