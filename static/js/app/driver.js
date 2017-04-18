import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import ToDoModel from './models/todo';

let ToDo = Marionette.LayoutView.extend({
	tagName: "li",
  className: "test",
	template: require('./templates/todoitem.html')
});

let ToDoList = Marionette.CompositeView.extend({
	childView: ToDo,
	childViewContainer: "ul",
	el: "#app",	
	template: require('./templates/todolist.html'),
	ui: {
		assignee: "#id_assignee",
		form: "form",
		task: "#id_task"
	},

	triggers: {
		"submit @ui.form" : "addToDoItem"
	},

	collectionEvents: {
		add: 'itemAdded'
	},

	onAddToDoItem: function() {
    this.model.set({
      assignee: this.ui.assignee.val(),
      task: this.ui.task.val()
    });
    if (this.model.isValid()) {
      let items = this.model.pick("assignee", "task");
      this.collection.add(items);
    }
	},

	itemAdded: function() {
		this.model.set({
      assignee: "Justin",
      task: ""
    });
    this.ui.assignee.val('Justin');
    this.ui.task.val('');
	}
});

let todo = new ToDoList({
	collection: new Backbone.Collection([
		{ assignee: 'Justin', task: 'Learn about Backbone.js' },
		{ assignee: 'Justin', task: 'Learn about Marionette' }
	]),
  model: new ToDoModel()
});

todo.render();