var store = {
	username: 'Sagar Chamling' // changing state changes one place and 
};

Vue.component('home-page', {
	template: '<h1 class="title">Home Page</h1>'
});

Vue.component('about-page', {
	template: '<h1 class="title">About Page</h1>'
});

var notificationApp = new Vue({
	el: '#app',

	data: {
		misc: 'data',
		shared: store
	},

	components: {
		notification: {
			data: function () {
				return store;
			},

			template: '<h2>{{ username }}: <slot></slot></h2>'
		}
	}
});