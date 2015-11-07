import Ember from 'ember';

export default Ember.Controller.extend({

  init: function () {
    var self = this;
    var clima_path = window.PimPamPum.hostName + '/api/clima';
    var clima_params = {codigo_woeid: '466821'};

    $.get(clima_path, clima_params, function(data) {
      self.set('clima', data);
      console.log(data);
    });
  }
});
