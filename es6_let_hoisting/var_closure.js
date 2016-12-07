'use strict';

x = "global";
// function scope:
(function() {
  console.log('1- x: ', x)
  
    x; // not "global"

    var x = 'local -1';
  console.log('2- x: ', x)
}());



{

  console.log('3- x: ', x)
    x; // not "global"

    var x = 'local -2';
  console.log('4- x: ', x)
}