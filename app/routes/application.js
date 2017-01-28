import Ember from 'ember';

export default Ember.Route.extend({

	beforeModel() {
    return this.get('session').fetch().catch(function() {
    });
  },

  actions: {
  	signIn(provider) {
      this.get('session').open('firebase', { provider: provider }).then((result) => {
        this.transitionTo('myfit');
      });
    },

    signOut() {
      this.get('session').close();
    }
  }

});