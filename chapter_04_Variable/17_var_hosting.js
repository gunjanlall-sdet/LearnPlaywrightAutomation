

console.log(greeting);
var greeting = "Hello";

/*What does js engine do when it encounters the above code?
When the JavaScript engine encounters the above code, 
it performs a process called "hoisting". 
During hoisting, variable declarations
(but not their initializations)
are moved to the top of their containing scope.*/

var greeting; // declaration is hoisted to the top
console.log(greeting); // undefined (the variable is declared but not initialized yet)
greeting = "Hello"; // initialization happens at the original line of code
console.log(greeting); // Hello (the variable is now initialized with the value "Hello")