var captcha;
var pan;
var otp;
var counter = 1;
function validate() {
   let email= document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let arr = name.split(" ");
    console.log(arr.length);
    if (arr.length != 2) {
        alert("Enter Your Valid Name");
        return;
    }

    if (arr[0].length < 4 || arr[1].length < 4) {
        alert("Enter Your Valid Name");
        return;
    }
    let pan= document.getElementById("pan").value;
    var regex=/^[A-Z]{5}[0-9]{4}[A-Z]$/;
    if(!regex.test(pan)){
        alert("Enter valid pan number");
        return;
    }

    let input1 = document.getElementById("input1").value;
    if (eval(captcha) == input1) {
        //navigate
        window.location.assign("thankyou.html");
    } else {
        alert("Invalid Captcha");
    }
    var obj = {
        name: name,
        email: email,

    }
    localStorage.setItem("user", JSON.stringify(obj));
}


function showCaptcha() {
    let a = Math.floor(Math.random() * 10);
    let b = Math.floor(Math.random() * 10);
    captcha = `${a}+ ${b}`
    document.getElementById("captcha").innerHTML = captcha;
}
function onLoadOfThankYou() {
    let str = localStorage.getItem("user");
    let obj = JSON.parse(str);
    let arr = obj.name.split(" ");
    document.getElementById("name").innerHTML = arr[0];
   document.getElementById("email").innerHTML=obj.email;
    otp = Math.floor(Math.random() * 10000);
    console.log(otp);

}
function validateOTP() {
    let otpText = document.getElementById("otp").value;
    if (otp == otpText) {
        alert("Validation Successful");
    } else if (counter == 3) {
        window.location.assign("pagenotfound.html");
    } else {
        counter++;
        onLoadOfThankYou();
    }
}