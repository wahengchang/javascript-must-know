'use strict';


var y = "global";


(function() {
    console.log('1- y: ', y)

    y; // Reference error: y is not defined

    let y = "local";

    console.log('2- y: ', y)
}());