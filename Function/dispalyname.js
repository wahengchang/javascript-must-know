function doSomething() {}

var popup = function(content) { console.log(content); };
popup.displayName = 'Show Popup';

console.log(doSomething.displayName); // "undefined"
console.log(popup.displayName); // "Show Popup"