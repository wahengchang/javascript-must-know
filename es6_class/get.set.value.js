
    class AnimalES6 {
        constructor(name) {
            this.name = name;
            this._age = 0;
        }

        get age() {
            return this._age;
        }

        set age(value) {
            if (value < 0) {
                console.log("We do not support undead animals");
            }

            this._age = value;
        }

        doSomething() {
            console.log("I'm a " + this.name);
        }
    }

    var lionES6 = new AnimalES6("Lion");
    lionES6.doSomething();
    lionES6.age = 5;
    console.log(lionES6.age)


// I'm a Lion
// get age()
// 5