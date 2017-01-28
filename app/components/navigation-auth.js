import Ember from 'ember';

export default Ember.Component.extend({

	actions: {
		signIn(provider) {
			this.sendAction("signIn", provider);
		},

		signOut() {
			this.sendAction("signOut");
		}
	}
});
