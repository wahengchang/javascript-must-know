// #The function.caller property returns the function that invoked the specified function.



function f(n) {
    console.log('1- f',f.caller)
    console.log('1- g',g.caller)
    g(n - 1);
}

function g(n) {
    console.log('2- f',f.caller)
    console.log('2- g',g.caller)
    if (n > 0) {
        f(n);
    } else {
        return;
    }
}
f(2);