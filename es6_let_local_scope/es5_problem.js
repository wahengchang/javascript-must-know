'use strict';


var x = "global";


(function() {
    console.log('1- x: ', x)

    x; // undefined

    var x = "local";

    console.log('2- x: ', x)
}());
