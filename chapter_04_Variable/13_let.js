let a = 10;
console.log(a); // 10

//let is block scope 
let retryCount=0;
retryCount=retryCount+1; // reassignment allowed with let
retryCount=retryCount+1; 
console.log("retry attempts: " + retryCount); // 2

//let retryCount=0; // redeclaration not allowed with let, this will throw an error

let testStatus = "pending";

if (testStatus === "pending") {
    let executionTime = 1200;
    console.log("Inside block:", executionTime);   // 1200
}

//console.log(executionTime); // ReferenceError: executionTime is not defined