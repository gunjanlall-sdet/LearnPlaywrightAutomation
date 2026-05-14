var a=10;
console.log(a); // 10

function printHello(){
    console.log("Hello Gunjan");
    var a=20; // variable 'a' is redeclared and initialized inside the function scope
    console.log(a); // 20
}
printHello();
console.log(a); // 10 (the value of 'a' outside the function remains unchanged)

if(true){
    var a=30; // variable 'a' is redeclared and initialized inside the block scope
    console.log(a); // 30
}
console.log(a); // 30 (the value of 'a' is updated to 30 due to var's function scope, not block scope)

