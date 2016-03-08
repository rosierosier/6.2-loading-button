console.log("Hello World!");
var handlebars = require('handlebars');
var $ = require('jquery');
var Backbone = require('backbone');
var loading = require('./models/loading');

var planetCollection = new loading.Planets();

$('.button-div').on('click', function(){
  $('.actual-button').html("Loading . . .");
  this.disabled = true;
  planetCollection.fetch().done(function(event){
    $('.actual-button').html("Submit");
    document.getElementsByClassName('actual-button').disabled = false;
    event.results.forEach(function(planet){
      console.log(planet.name);
      $('.container').append('<p>' + planet.name + '</p>');
    });
  });
});
