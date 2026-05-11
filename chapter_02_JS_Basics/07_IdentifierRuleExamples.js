// Identifier Rule Examples in JavaScript

// 1. Must start with a letter, underscore (_), or dollar sign ($)
var name = "Alice";
var _score = 100;
var $price = 9.99;

// 2. Can contain letters, digits, underscores, and dollar signs
var player1 = "Bob";
var total_amount = 250;
var price$ = 15;

// 3. Cannot start with a digit
// var 1player = "Charlie"; // invalid
var player1count = 3; // valid because it starts with a letter

// 4. Cannot contain spaces
// var first name = "David"; // invalid
var firstName = "David";

// 5. Cannot be a reserved keyword
// var for = 10; // invalid
var loopCount = 10;

// 6. Case-sensitive
var Name = "Eva";
var name = "Frank";
console.log(Name); // Eva
console.log(name); // Frank

// 7. No special characters except _ and $
// var user-name = "Gina"; // invalid
// var user@id = 123; // invalid
var user_name = "Gina";
var user$id = 456;

// 8. Should be meaningful and descriptive
var x = 5; // valid but not descriptive
var totalPrice = 5; // better

// 9. Can be any length
var veryLongIdentifierNameThatIsStillValid = "Long name";

// 10. Follow camelCase or snake_case naming conventions
var userAge = 20; // camelCase
var user_age = 20; // snake_case

// 11. Unicode characters are allowed, but not recommended for cross-platform compatibility
var café = "coffee";
var π = 3.14159;

console.log(name, _score, $price, player1, total_amount, price$, player1count, firstName, loopCount, Name, user_name, user$id, totalPrice, veryLongIdentifierNameThatIsStillValid, userAge, user_age, café, π);