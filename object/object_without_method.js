
// they are equivalent 
////////////////////////////////////
function Obj0( prop ) { 
    return { 
        p : prop, 
        sayHello : function(){ console.log(this.p); }, 
    }; 
} 
var foo0 = new Obj0( "hello --0 " ); 
foo0.sayHello();

////////////////////////////////////

function Obj( prop ) { 
    this.p = prop; 
} 
Obj.prototype.sayHello = function(){console.log(this.p);}; 

var foo = new Obj( "hello" ); 
foo.sayHello();

////////////////////////////////////