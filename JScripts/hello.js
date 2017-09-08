/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var obj = {};
obj.param = 'new value';
console.log(obj.param);
obj['param'] = 'changed value';
console.log(obj['param']);

var val = 'value';
obj[val] = 'dynamic variable value';
console.log(obj[val]);

// Used with inheritance
//var task = new Object() works with ES6;
/*
var task = {
	title: 'My Title',
	description: 'My Description'
};
*/
var task = Object.create(Object.prototype);

Object.defineProperty(task, 'createDate', {
	value: Date(), // Is the value of the createDate property
	writable: true, // Is set if we want to make constants
	enumerable: true, // Is set to work in keys or loop operations
	configurable: true // Is set if we allow to change configurations
})

task.title = 'My task';
task.description = 'My Description';
task.toString = function(){
	return this.title + ' ' + this.description + '\n It was created ' + this.createDate;
}

console.log(task.toString());

var lastObj = new Object();

var user = Object.create(Object.prototype);
var userList = [user, user, user];
user.name = 'John';
user.surname = 'Kenton';
user.age = 48;

console.log(user);

// -----------------------Second part(2)------------------------

var task = {
	title: 'My Title',
	description: 'My Description'
};

Object.defineProperty(task, 'toString', {
	value: function() {
		return this.title + ' ' + this.description;
	},
	writable: false,
	enumerable: false,
	configurable: true
});

task.toString = 'hi'; // Property setting 'writtable' will stop it from being rewritten

Object.defineProperty(task, 'toString', {
	enumerable: true // Wont be rewritten to true if configurable will be set to false
});

console.log(task.toString());
console.log(task);
console.log(Object.keys(task)); // If enumerable will be set to false it wont return the function

// -----------------------Third part(3)------------------------
// -----------------------Inheritance--------------------------

var urgentTask = Object.create(task);

Object.defineProperty(urgentTask, 'toString', {
	value: function() {
		return this.title + ' is urgent.';
	},
	writable: false,
	enumerable: false,
	configurable: true
});

console.log(urgentTask.toString());
console.log(task.toString());