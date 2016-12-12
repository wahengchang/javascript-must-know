// iterate through key-value gracefully
var obj = {a: 5, b: 7, c: 9};

for (var [key, value] of Object.entries(obj)) {
    console.log(key + ' ' + value); // "a 5", "b 7", "c 9"
}
