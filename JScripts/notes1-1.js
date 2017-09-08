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

// -----------------------Second part------------------------

var task = {
	title: 'My Title',
	description: 'My Description'
};

Object.defineProperty(task, 'toString', {
	value: function() {
		return this.title + ' ' + this.description;
	},
	writable: false,
	enumerable: true,
	configurable: true
});

task.toString = 'hi'; // Property setting 'writtable' will stop it from being rewritten

console.log(task.toString());
console.log(task);
console.log(Object.keys(task));