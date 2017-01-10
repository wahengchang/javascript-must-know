var newLine = "<br />";
 
//as same as 
// var obj = Object.create({}, {
//     ...
//     ...
// }

var obj = {};
Object.defineProperties(obj, {
    newDataProperty: {
        value: 101,
        writable: true,
        enumerable: true,
        configurable: true
    },
    newAccessorProperty: {
        set: function (x) {
            console.log("in property set accessor" + newLine);
            this.newaccpropvalue = x;
        },
        get: function () {
            console.log("in property get accessor" + newLine);
            return this.newaccpropvalue;
        },
        enumerable: true,
        configurable: true
    }});

// Set the accessor property value.
obj.newAccessorProperty = 10;
console.log("obj.newDataProperty: ", obj.newDataProperty)
console.log("newAccessorProperty value: " + obj.newAccessorProperty + newLine);

// Output:
// in property set accessor
// in property get accessor
// newAccessorProperty value: 10