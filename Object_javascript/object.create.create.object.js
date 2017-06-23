o1 = Object.create({}, { 
  p: { 
    value: 42 
  } 
});

o1.p=1;
//p will be muted

var o2 = Object.create({});
o2['p'] = 42;

// to specify an ES3 property
o3 = Object.create({}, {
  p: {
    value: 42,
    writable: true,
    enumerable: true,
    configurable: true
  }
});

console.log('o1', o1) //{}
console.log('o2', o2) //{ p: 42 }
console.log('o3', o3) //{ p: 42 }
console.log('o2===o3', o2===o3)