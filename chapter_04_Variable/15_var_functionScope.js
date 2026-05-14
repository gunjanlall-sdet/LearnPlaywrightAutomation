var a=10; 
console.log(a); // 10
function printHello(){
    console.log("Hello");
    var a =20;
console.log(a); // 20
if(true){
    var a = 30;
    console.log(a); //30

}
console.log("F-->",a); // 30 (var is function scope, so the value of 'a' is updated to 30 within the function)
}
console.log("G-->",a); // 10 (var is function scope, so the value of 'a' outside the function remains unchanged)
printHello();