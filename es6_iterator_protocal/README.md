#Iterator protocal

The iterator protocol defines a standard way to produce a sequence of values (either finite or infinite).

An object is an iterator when it implements a *next()* method with the following semantics:

###next  
A zero arguments function that returns an object with two properties:

###done (boolean)
Has the value true if the iterator is past the end of the iterated sequence. In this case value optionally specifies the return value of the iterator. The return values are explained here.
Has the value false if the iterator was able to produce the next value in the sequence. This is equivalent of not specifying the done property altogether.
value - any JavaScript value returned by the iterator. Can be omitted when done is true.
The next method always has to return an object with appropriate properties including done and value. If a non-object value gets returned (such as false or undefined), a TypeError ("iterator.next() returned a non-object value") will be thrown.


#iterable protocal

The iterable protocol allows JavaScript objects to define or customize their iteration behavior, such as what values are looped over in a for..of construct. Some built-in types are built-in iterables with a default iteration behavior, such as Array or Map, while other types (such as Object) are not.

In order to be iterable, an object must implement the @@iterator method, meaning that the object (or one of the objects up its prototype chain) must have a property with a @@iterator key which is available via constant Symbol.iterator:

###[Symbol.iterator]  
A zero arguments function that returns an object, conforming to the iterator protocol.