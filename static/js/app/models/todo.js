import Backbone from 'backbone';

let ToDo = Backbone.Model.extend({
	
	defaults: {
		assignee: "",
		text: ""
	},

	validate: function(attrs) {
		let errors = {};
		let hasError = false;
		if (!attrs.assignee) {
			errors.assignee = 'assignee must be set';
			hasError = true;
		}
		if (!attrs.task) {
			errors.task = 'task must be set';
			hasError = true;
		}
		if (hasError) {
			console.log(errors);
			return errors;
		}
	}
});

module.exports = ToDo;
