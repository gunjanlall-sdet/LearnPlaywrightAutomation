let a=10; 
console.log(a); // 10
function printHello(){
    console.log("Hello");
    let a =20;
console.log(a); // 20
if(true){
    let a = 30;
    console.log(a); //30

}
console.log("F-->",a); // 30 // let is block scope, so the value of 'a' is 30 within the function scope
}
console.log("G-->",a); // 10 // let is block scope, so the value of 'a' outside the function remains unchanged  
printHello();