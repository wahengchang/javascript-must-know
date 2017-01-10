#Object.assign
####The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.

 - The Object.assign() method only copies enumerable and own properties from a source object to a target object. 
 - It uses [[Get]] on the source and [[Set]] on the target, so it will invoke getters and setters. Therefore it assigns properties versus just copying or defining new properties. This may make it unsuitable for merging new properties into a prototype if the merge sources contain getters. For copying property definitions, including their enumerability, into prototypes Object.getOwnPropertyDescriptor() and Object.defineProperty() should be used instead.


