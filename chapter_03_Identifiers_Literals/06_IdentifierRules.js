


/*
Must start with a letter, underscore (_), or dollar sign ($)
Can contain letters, digits, underscores, and dollar signs
Cannot start with a digit
Cannot contain spaces
Cannot be a reserved keyword
Case-sensitive
No special characters except _ and $
Should be meaningful and descriptive
Can be any length
Follow camelCase or snake_case naming conventions
unicode characters are allowed
*/

var _myvariable = 10; // Valid identifier
var $myVariable = 20; // Valid identifier
var myVariable1 = 30; // Valid identifier
// var 1myVariable = 40; // Invalid identifier (starts with a digit)
// var my Variable = 50; // Invalid identifier (contains a space)
// var var = 60; // Invalid identifier (reserved keyword)               


var Name="Gunjan"; // Valid identifier
// Valid identifier (case-sensitive) Name and name are different identifiers, 
// but it's generally recommended to avoid using identifiers that differ only in case to prevent confusion.
var name="Gunjan"; 

var firstName="Gunjan"; // Valid identifier (camelCase)
var first_name="Gunjan"; // Valid identifier (snake_case)
