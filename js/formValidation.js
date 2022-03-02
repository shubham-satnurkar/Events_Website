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





// Sign In Form Validation
let inEmailNode = $("#inEmail");
let inPassNode = $("#inPassword");
let emailErrNode = $("#emailErr"); 
let passErrNode = $("#passErr"); 
// For Sign in email
function Evalidate(){
    emailErrNode.text("");
    let inEmail = inEmailNode.val();
    let subStr = inEmail.substring(inEmail.indexOf('@')+1);
    console.log(subStr);

    if (inEmail =="") {
        emailErrNode.text("this field is required");
        inEmailNode.css("border", border1);
        return false
    } 
    else if(!inEmail.includes('@') || subStr == ""){
        emailErrNode.text("please put valid email id ");
        inEmailNode.css("border", border1);
        return false
    }
    else {
        inEmailNode.css("border", border2);
        return true
    }
}
// For Sign in password
function Pvalidate(){
    passErrNode.text("");
    let inPass = inPassNode.val();
    let regExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])");
    console.log(regExp.test(inPass));
    if (inPass == "") {
        passErrNode.text("this field is required");
        inPassNode.css("border", border1);
        return false
    } 
    else if(regExp.test(inPass) == false){
        passErrNode.text("password sholud contain small and capital letter, digit and symbol");
        inPassNode.css("border", border1);
        return false;
    }
    else if(inPass.length<8 || inPass>16){
        passErrNode.text("password should continer atleast 8 and atmost 16 characters");
        inPassNode.css("border", border1);
        return false;
    }
    else {
        inPassNode.css("border", border2);
        return true;
    }
}

function singIn(){
    let emailSt= Evalidate();
    let passSt= Pvalidate();
   

    return emailSt && passSt;
}




// Activate Form Validation
let actEmailNode = $("#actEmail");
let actOTPNode = $("#actOTP");
let actErr1Node = $("#actErr1");
let actErr2Node = $("#actErr2");

function actEmailValid(){
    actErr1Node.text("");
    let actEmail = actEmailNode.val();
    let subStr = actEmail.substring(actEmail.indexOf('@')+1);
    console.log(subStr);
    
    if (actEmail == "") {
        actErr1Node.text("this field is required");
        actEmailNode.css("border", border1);
        return false
    } 
    else if(!actEmail.includes('@') || subStr == ""){
        actErr1Node.text("Invalid email id");
        actEmailNode.css("border", border1);
        return false
    }
    else {
        actEmailNode.css("border", border2);
        return true
    }
}


// For OTP Validation
function actOTPValid(){
    actErr2Node.text("");
    let OTP = actOTPNode.val();
    let regExp = new RegExp("^[0-9]*$");
    console.log(regExp.test(OTP));
    if (OTP== "") {
        actErr2Node.text("This field is required");
        actOTPNode.css("border", border1);
        return false
    }
    else if(regExp.test(OTP) == false){
        actErr2Node.text("wrong OTP it should contain digit only");
        actOTPNode.css("border", border1);
        return false
    }
    else if(OTP.length != 6){
        actErr2Node.text("Invalid OTP it sholud contain 6 digit only");
        actOTPNode.css("border", border1);
        return false
    }
     else {
        actOTPNode.css("border", border2);
        return true
    }
}


function actFrom(){
    let actSt1 = actEmailValid();
    let actSt2 = actOTPValid();
    return actSt1 && actSt2;
}
















