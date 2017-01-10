

#get, set
```
    var obj = {
        get prop() {
            return "Getter";
        },
        set prop(value) {
            console.log("Setter: "+value);
        }
    }

    > obj.prop
    'Getter'
    > obj.prop = 123;
    Setter: 123
```



#internal properties

The internal property [[Prototype]] points to the prototype of an object
 - It can be read via Object.getPrototypeOf().
 - via Object.create() or __proto__
```    
    {
        value: 123,
        writable: false,
        enumerable: true,
        configurable: false
    }
```