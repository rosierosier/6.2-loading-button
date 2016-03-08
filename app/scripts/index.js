console.log("Hello World!");
var handlebars = require('handlebars');
var $ = require('jquery');
var Backbone = require('backbone');
var loading = require('./models/loading');

var submit = new SubmitButton();

$('.button-div').click(function(){
  submit.refresh();
})

//###################
//pulling from an API
//###################
// var starWarsChars = new characters.CharacterCollection();
// starWarsChars.fetch().done(function(){
