// Sign Up form validation
let fnameNode = $("#fname");
let lnameNode = $("#lname");
let emailNode = $("#email");
let passwordNode = $("#password");

let border1 = "1px solid #f00";
let border2 = "1px solid #0f0";

let error1Node = $("#error1");
let error2Node = $("#error2");
let error3Node = $("#error3");
let error4Node = $("#error4");
// For First Name
function validate1(){
    error1Node.text("");
    let fname = fnameNode.val();
    let regExp = new RegExp("^[A-Za-z]*$");
    console.log(regExp.test(fname));

    if (fname == "") {
        error1Node.text("This field is required");
        fnameNode.css("border", border1);
        return false;
    } 
    else if(regExp.test(fname) == false){
        error1Node.text("Name should contain alphabate only");
        fnameNode.css("border", border1);
        return false;
    }
    else{
        fnameNode.css("border", border2);
        return true
    }
}
// For Last name
function validate2(){
    error2Node.text("");
    let lname = lnameNode.val();
    let regExp = new RegExp("^[A-Za-z]*$");
    console.log(regExp.test(lname));

    if (lname == "") {
        error2Node.text("This field is required");
        lnameNode.css("border", border1);
        return false;
    } 
    else if(regExp.test(lname) == false){
        error2Node.text("Name should contain alphabate only");
        lnameNode.css("border", border1);
        return false;
    }
    else{
        lnameNode.css("border", border2);
        return true
    }
}
// For Email
function validate3(){
    error3Node.text("");
    let email = emailNode.val();
    let subStr = email.substring(email.indexOf('@')+1);
    console.log(subStr);

    if (email == "") {
        error3Node.text("This field is required");
        emailNode.css("border", border1);
        return false;
    } 
    else if(!email.includes('@') || subStr == ''){
        error3Node.text("Please put valid email id");
        emailNode.css("border", border1);
        return false;
    }
    else{
        emailNode.css("border", border2);
        return true
    }
}
// For Password
function validate4(){
    error4Node.text("");
    let password = passwordNode.val();
    let regExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])");
    console.log(regExp.test(password));

    if (password == "") {
        error4Node.text("This field is required");
        passwordNode.css("border", border1);
        return false;
    } 
    else if(regExp.test(password) == false){
        error4Node.text("password should contain one small, one capital, one digit, and one symbol");
        passwordNode.css("border", border1);
        return false;
    }
    else if(password.length<8 || password.length>18){
        error4Node.text("password should contain atleast 8 and atmost 18 characters");
        passwordNode.css("border", border1);
        return false;
    }
    else{
        passwordNode.css("border", border2);
        return true
    }
}

function signUp(){
    let state1= validate1();
    let state2= validate2();
    let state3= validate3();
    let state4= validate4();

    return state1 && state2 && state3 && state4;
}