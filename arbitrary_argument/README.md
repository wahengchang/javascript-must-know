#Array => Argument Object
```
foo.apply(this, [4,1,2,3]);
```

#Argument Object => Array
```
var args = [].slice.call(arguments);
```