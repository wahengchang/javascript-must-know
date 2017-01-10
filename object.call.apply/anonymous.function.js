var animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' }
];

for (var i = 0; i < animals.length; i++) {
  (function(i) {
    this.print = function() {
      console.log('#' + i + ' ' + this.species+ ': ' + this.name);
    }
  }).call(animals[i], i);
}


for (var i = 0; i < animals.length; i++) {
  animals[i].print()
}
