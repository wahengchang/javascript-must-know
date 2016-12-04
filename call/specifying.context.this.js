function greet() {
    console.log(this.person, 'Is An Awesome', this.role);
}

var _obj = {
    person: 'Douglas Crockford',
    role: 'Javascript Developer'
};

greet.call(_obj); // Douglas Crockford Is An Awesome Javascript Developer