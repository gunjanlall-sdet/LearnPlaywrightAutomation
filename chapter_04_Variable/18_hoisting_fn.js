function getUserStatus(){
    console.log(status);
    var status = "active";
    console.log(status);


}
getUserStatus();

// In this example, the variable 'status' is hoisted to the top
// of the function scope, but its value is not assigned until the
//  line where it is declared. Therefore, when we try to log 
// 'status' before its declaration, it will output 'undefined'.
//  After the declaration and assignment, it will output 'active'.