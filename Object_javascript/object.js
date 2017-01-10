var current = Object.prototype.valueOf;

// Since my property "-prop-value" is cross-cutting and isn't always
// on the same prototype chain, I want to modify Object.prototype: 
Object.prototype.valueOf = function() {
  if (this.hasOwnProperty("-prop-value") ){
    return this["-prop-value"];
  } else {
    // It doesn't look like one of my objects, so let's fall back on 
    // the default behavior by reproducing the current behavior as best we can.
    // The apply behaves like "super" in some other languages.
    // Even though valueOf() doesn't take arguments, some other hook may.
    return current.apply(this, arguments);
  }
}