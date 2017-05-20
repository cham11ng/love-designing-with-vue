var app = new Vue({
	el: '#app',
	data: {
		title: 'Hello Vue!',
		subtitle: 'This is my first practice'
	}
});

// appBind.message = 'Something else';
var appBind = new Vue({
	el: '#app-bind',
	data: {
		message: 'You loaded this page on ' + new Date()
	}
});

// visibility.seen = false;
var visibility = new Vue({
	el: '#visibility',
	data: {
		seen: true
	}
});

//listing.lists.push({sn: '4', text: 'Wow its fantastic'});
var listing = new Vue({
	el: '#lists',
	data: {
		lists: [
			{
				sn: '1',
				text: 'Javascript'
			},
			{
				sn: '2',
				text: 'Vue'
			},
			{
				sn: '3',
				text: 'Awesome'
			}
		]
	}
});

var reverse = new Vue({
	el: '#reverse',
	data: {
		message: 'Hello Vue.js! Hahaha'
	},
	methods: {
		reverseMessage: function() {
			this.message = this.message.split('').reverse().join('')
		}
	}
});

var inputTextModel = new Vue({
	el: '#input-text',
	data: {
		message: ''
	}
});

// register
Vue.component('my-component', {
	template: '<div>A custom component!</div>'
})
// create a root instance
var custom = new Vue({
	el: '#custom-component'
})

// Define a new component called todo-item
Vue.component('todo-item', {
	props: ['todo'],
	template: '<li>{{ todo.text }}</li>'
})

var components = new Vue({
	el: '#components',
	data: {
		groceryList: [
			{ text: 'Vegetables' },
			{ text: 'Cheese' },
			{ text: 'Whatever else humans are supposed to eat' }
		]
	}
})