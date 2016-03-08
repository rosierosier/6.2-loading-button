var handlebars = require('handlebars');
var $ = require('jquery');
var Backbone = require('backbone');

console.log('hi')

var SubmitButton = Backbone.Model.extend({
  defaults: {
    // 'quantity': 0
  },
  refresh: function(){
    // this.set('quantity', this.get('quantity') + 1);
    $('.button-div').empty();
    $('.button-div').append('<button type="button" class="actual-button"><p>Loading . . .</p></button>')
  }
});

module.exports = SubmitButton;
