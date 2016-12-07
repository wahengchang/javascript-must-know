'use strict';

var x = "global";
// function scope:
(function() {
  console.log('1- x: ', x) //ReferenceError: x is not defined

    x; // not "global"

    let x = 'local -1';
  console.log('2- x: ', x)
}());



// {

//   console.log('3- x: ', x)
//     x; // not "global"

//     let x = 'local -2';
//   console.log('4- x: ', x)
// }