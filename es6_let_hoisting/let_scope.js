'use strict';

var x = "global";

{

  console.log('3- x: ', x)
    x; // not "global"

    let x = 'local -2';
  console.log('4- x: ', x)
}