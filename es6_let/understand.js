"use strict";


function letExample(value) {
  if (value) {
    let letValue = value;

    console.log('inside block', letValue);

    // [SyntaxError] redeclaration of letValue would be a SyntaxError
    let letValue = 'foo';
  }

  try {
    // [SyntaxError] Accessing letValue is a ReferenceError because it
    // was defined w/in if-block
    console.log(letValue);

    // if we get here, it means that the JS engine didn't
    // throw an exception, which means that the engine
    // (or transpiled code) did not faithfully reproduce
    // how let should work
    console.log('let not faithfully handled');
  }
  catch (e) {
    // e is a ReferenceError
    console.log('letValue not accessible', e);
  }
}
letExample(2);