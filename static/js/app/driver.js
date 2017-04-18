import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

const ToDo = Marionette.LayoutView.extend({
	tagName: "li",
	template: require('./templates/todoitem.html')
});

const ToDoList = Marionette.CompositeView.extend({
	childView: ToDo,
	childViewContainer: "ul",
	el: "#app",	
  	template: require('./templates/todolist.html'),

  	ui: {
  		assignee: "#id_assignee",
  		form: "#form",
  		task: "#id_task"
  	},

  	triggers: {
  		"submit @ui.form" : "add:todo:item"
  	},

  	collectionEvents: {
  		add: 'itemAdded'
  	},

  	onAddToDoItem: function() {
  		this.collection.add({
  			assignee: this.ui.assignee.val(),
  			task: this.ui.task.val()
  		});
  		console.log(this);
  	},

  	itemAdded: function() {
  		this.ui.assignee.val('');
  		this.ui.task.val('');
  	}
});

const todo = new ToDoList({
	collection: new Backbone.Collection([
		{ assignee: 'Justin', task: 'Learn about Backbone.js' },
		{ assignee: 'Justin', task: 'Learn about Marionette' }
	])
});

todo.render();