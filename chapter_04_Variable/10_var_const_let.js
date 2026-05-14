var a = 10;
let b = 20;
const c = 30;   
console.log(a); // 10
console.log(b); // 20           
console.log(c); // 30


var browser="chrome";
var browser="firefox"; // redeclaration allowed with var
browser="safari"; // reassignment allowed with var
console.log(browser); // safari


var testCases=["login", "logout", "signup"];
for(var i=0; i<testCases.length; i++){
    console.log(testCases[i]);
}
console.log("loop counter leaked outside the for loop:",i); 