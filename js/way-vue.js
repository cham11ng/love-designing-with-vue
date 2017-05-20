var handleSubmit = new Vue({
	el: '#text-area',
	data: {
		message: '',
		count: 0
	},
	methods: {
		handleIt: function () {
			alert('Thank you trying to submit. Sadly, You have been trolled.');
		},
		updateCount: function () {
			this.count += 1;
		}
	}
});

var opinion = new Vue({
	el: '#opinion',
	components: {
		counter: {
			template: '#count-button',
			data: function() {
				return { count: 0 }
			},
			props: ['subject']
		}
	}
}) ;

var fullname = new Vue({
	el: '#fullname',
	data: {
		first: 'Sagar',
		last: 'Chamling',
		fullname: 'Sagar Chamling'
	},
	computed: {
		fullname: function() {
			return this.first + ' ' + this.last
		}
	}
});

var subscription = new Vue({
	el: '#subscription',
	data: {
		plans: [
			{ title: 'Enterprise', price: 1000 },
			{ title: 'Pro', price: 500 },
			{ title: 'Personal', price: 100},
			{ title: 'Free', price: 0}
		],
		active: {}
	},
	components: {
		plan: {
			props: ['plan', 'active'],
			computed: {
				isUpgrade: function() {
					return this.plan.price > this.active.price
				}
			},
			methods: {
				setActivePlan: function() {
					this.active = this.plan;
				}
			}
		},
	}
});

var tasks = new Vue({
	el: '#tasks',
	data: {
		tasks: [
			{ body:'Go to hell', completed: false },
			{ body:'Downgrade', completed: false },
			{ body:'Upgrade', completed: true }
		]
	},
	methods: {
		toggleCompleteFor: function(task) {
			task.completed = ! task.completed;
		}
	}
});

Vue.component('c11-todo', {
	props: ['tasks'],
	template: '#to-do-list-template',
	computed: {
		remaining: function() {
			var vm = this;
			return this.tasks.filter(function(task) {
				return vm.isCompleted(task);
			}).length;
		},
		progress: function() {
			var vm = this;
			return this.tasks.filter(function(task) {
				return vm.inProgress(task);
			}).length;
		}
	},
	methods: {
		isCompleted: function(task) {
			return task.completed;
		},

		inProgress: function(task) {
			return ! this.isCompleted(task);
		},

		deleteTask: function(task) {
			this.tasks.$remove(task);
		},

		clearCompleted: function() {
			this.tasks = this.tasks.filter(this.inProgress);
		}
	}
});

var tasksList = new Vue({
	el: '#to-do-list-app',
	data: {
		tasks: [
			{ body:'Manish got to hell', completed: false },
			{ body:'Manish is bullshit', completed: false },
			{ body:'Manish is holyshitty', completed: true }
		]
	}
});;