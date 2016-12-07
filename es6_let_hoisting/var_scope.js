'use strict';

x = "global";

{

  console.log('3- x: ', x)
    x; // not "global"

    var x = 'local -2';
  console.log('4- x: ', x)
}