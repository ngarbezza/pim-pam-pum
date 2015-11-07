import Ember from 'ember';

export default Ember.Mixin.create({
  nonRestAction: function (action, method, data) {
    const type = this.constructor.typeKey;
    const adapter = this.container.lookup('adapter:application');

    return adapter.ajax(this.getActionUrl(action, adapter), method, { data: data });
  },

  getActionUrl: function(action, adapter) {
    const type = this.constructor.typeKey;
    const id = this.get('id');

    return `${adapter.buildURL(type, id)}/${action}`;
  },

  updateRecord: function(result) {
    const type = this.constructor.typeKey;
    this.store.pushPayload(type, result);
  }
});
