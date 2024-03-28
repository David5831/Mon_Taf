let nom = document.getElementById("name");
let email = document.getElementById('email');
let password = document.getElementById("password");
let confirmPass = document.getElementById('confirmPass');
let submit = document.getElementById("submit");
submit.disabled  = false;

let capital = /[A-Z]/g;
let lower = /[a-z]/g;
let number = /[0-9]/g;



nom.addEventListener("input", function () {
    if (nom.value.trim()==="") {
        document.getElementById("bottomName").style.border="2px solid red";
    } else {
        document.getElementById("bottomName").style.border="2px solid green";
    }
  })

email.addEventListener("input",function () {
    if (email.value.trim()==="" || !email.value.match("@")) {
        document.getElementById("bottomEmail").style.border="2px solid red";
    } else {
        document.getElementById("bottomEmail").style.border="2px solid green";
    }
 })
password.addEventListener("input",function () { 

    if (password.value.trim()==="" || password.value.length<8 || !password.value.match(lower) || !password.value.match(capital) || !password.value.match(number)) {
        document.getElementById("bottompassword").style.border="2px solid red";
    } else {
        document.getElementById("bottompassword").style.border="2px solid green";
    }

 })
confirmPass.addEventListener("input", function () { 

    if (confirmPass.value!=password.value) {
        document.getElementById("bottomConfirmPass").style.border="2px solid red";
    } else {
        document.getElementById("bottomConfirmPass").style.border="2px solid green";
    }
 })

 function validationFom(e) {
    
 }