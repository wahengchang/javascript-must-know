
    function Animal (name) {
      this.name = name;  
    }

    Animal.prototype.speak = function () {
      console.log(this.name + ' makes a noise.');
    }

    class Dog extends Animal {
      speak() {
        console.log(this.name + ' barks.');
      }
    }

    var d = new Dog('Mitzie');
    d.speak();

    // Mitzie barks.
