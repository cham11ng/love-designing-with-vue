Vue.component('message', {
	template: '<input v-model="message" @keyup.enter="storeMessage" class="input mt1">',

	data: function() {
		return { message: '' };
	},

	methods: {
		storeMessage: function() {
			this.$dispatch('new-message', this.message);
			this.message = ''; // clear input menu
		}
	}
});

Vue.transition('fading', {
	enterClass: 'fadeInLeft',
	leaveClass: 'fadeOutRight'
});

Vue.transition('fliping', {
	enterClass: 'flipInX',
	leaveClass: 'flipOutX'
});

var app = new Vue({
	el: '#app',

	/*events: { // listing events (implicit)
		'new-message': function(message) {
			console.log('Parent is handeling '+message);
		}
	}*/

	data: {
		messages: [],
		show: false,
		option: ''
	},

	computed: {
		option: function () {
			if (this.show == true)
				return 'Bye Bye';
			else
				return 'Want you to be Greeted';
		}
	},

	methods: {
		handleNewMessage: function(message) {
			this.messages.push(message);
		}
	}
});
