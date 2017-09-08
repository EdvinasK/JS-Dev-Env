var Task = require('./task');

var task1 = new Task('Learn about constructors.');
var task2 = new Task('Learn about modules.');
var task3 = new Task('Learn about singletons.');
var task4 = new Task('Learn about prototypes.');

task1.complete();
task2.save();
task3.save();
task4.save();