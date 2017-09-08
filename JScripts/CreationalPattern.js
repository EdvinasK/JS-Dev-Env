//------------------Constructor pattern-----------------------

/*
function ObjectName(param1, param2){
	this.param1 = param1;
	this.param2 = param2;
	this.toString = function(){
		return this.param1 + ' ' + this.param2;
	}
}
*/

var Task = function(name){
	this.name = name;
	this.completed = false;
}

Task.prototype.complete = function(){
	console.log('completing task: ' + this.name);
	this.completed = true;
}

Task.prototype.save = function(){
	console.log('saving Task: ' + this.name);
}

/*
	Prototyping creation basic.
	Prototyping is using so each object would not create additional functions which could be used by all of the objects independently.

	ClassName.prototype.methodName = function (arguments){
	
	};
*/

//module.exports = Task; Works only with node, then CreationalPattern2.js would have to use var Task = require('./Task');

var task1 = new Task('Learn about constructors.');
var task2 = new Task('Learn about modules.');
var task3 = new Task('Learn about singletons.');
var task4 = new Task('Learn about prototypes.');

task1.complete();
task2.save();
task3.save();
task4.save();