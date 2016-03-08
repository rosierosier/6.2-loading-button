var handlebars = require('handlebars');
var $ = require('jquery');
var Backbone = require('backbone');

var Planet = Backbone.Model.extend({

});

var Planets = Backbone.Collection.extend({
  model: Planet,
  url: 'http://swapi.co/api/planets',
  parse: function(data){
    return data.results;
  }
});

// var planets = new Planets();
// planets.create({name: 'kepler'});


// $('.button-div').on('click', function(){
//   planets.fetch().done(function(){
//     // planets.each(function(planet){
//       console.log(planet);
//     // });
//   });
// });
console.log('planets');

// planets.add({
//   name: 'kepler',
//   terrain: 'rough'
// });

// planets.each(function(planet){
//   planet.save();
// });

module.exports = {
  'Planet': Planet,
  'Planets': Planets
};
