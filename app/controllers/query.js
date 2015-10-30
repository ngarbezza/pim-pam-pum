import Ember from 'ember';

export default Ember.Controller.extend({

  init: function () {
    var self = this;
    $.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20%3D%2091863280%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
      function(data){
        self.set('query', data);
        console.log(data);
      });
  }
});
