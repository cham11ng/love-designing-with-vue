Vue.filter('role', function(value, role) {
	return value.filter(function(item) {
		return item.role === role;
	})
}); // people | role 'admin'

Vue.filter('jsonIt', function(value) {
	return JSON.stringify(value);
});

var appFilter = new Vue({
	el: '#filter-app',
	data: {
		message: 'Hello World',
		people: [
			{ name: 'Joe', role: 'admin'},
			{ name: 'Roy', role: 'admin'},
			{ name: 'Toy', role: 'amatuar'},
			{ name: 'Ash', role: 'student'},
			{ name: 'Grey', role: 'superadmin'}
		]
	}
});