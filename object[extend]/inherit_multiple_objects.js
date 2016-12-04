function mixin(receiver, supplier) {
    for (var property in supplier) {
        if (supplier.hasOwnProperty(property)) {
            receiver[property] = supplier[property];
        }
    }
}


// Shape - superclass
function Shape() {
  this.x = 0;
  this.y = 0;
}

// superclass method
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.', x,' , ', y);
};

///////////////////////////////
//////////////////////////////
//////////////////////////////

function ABC() {
  this.a = 2;
  this.b = 3;
}

ABC.prototype.back = function(x, y) {
  this.a -= x;
  this.b -= y;
  console.info('ABC moved.', x,' , ', y);
};

//////////////////////////////
//////////////////////////////
//////////////////////////////


function MyClass() {
  ABC.call(this);
  Shape.call(this);
}

MyClass.prototype = Object.create(ABC.prototype); // inherit
mixin(MyClass.prototype, Shape.prototype); // mixin

MyClass.prototype.myMethod = function() {
  // do a thing
  console.log('myMethod');
};



//////////////////////////////
//////////////////////////////
//////////////////////////////

var rect = new MyClass();

console.log('Is rect an instance of MyClass?', rect instanceof MyClass);// true
console.log('Is rect an instance of MyClass?', rect instanceof MyClass);// true
rect.move(0, 1); // Outputs, 'MyClass moved.'
rect.back(2, 8); // Outputs, 'MyClass moved.'
