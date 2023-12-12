const fullname=document.getElementById("fullname");
const username=document.getElementById("username");
const form=document.getElementById("form");
const email=document.getElementById("emailid");
const phone=document.querySelector("#phonenumber");
const password=document.getElementById("originalPassword");
const cpassword=document.getElementById("confirmPassword");
const checkbox=document.getElementById("checkbox");
const button=document.getElementById('submit');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
});

const validateInputs =()=>{
    const nameVal=fullname.value.trim();
    const userval=username.value.trim();
    const phoneval=phone.value.trim();
    const passwordval=password.value.trim();
    const cpasswordval=cpassword.value.trim();
    let success=true;
    // fullname
    if(nameVal=== "" || nameVal.length<5){
        setError(fullname,"fullname is required");
    }else{
        setSuccess(fullname);
    }
    // username
    if (userval === "" || userval.length < 5) {
        setError(username, "Username is required and must be at least 5 characters");
    } else {
        setSuccess(username);
    }
    // phone number
    if (phoneval === ""|| phoneval.length!==10) {
        success=false;
        setError(phone,"Enter a correct 10-digit phone number");
    }else {
        setSuccess(phone);
    }
    //password
    if(passwordval.length<6 || passwordval.length>20 || passwordval==""){
        setError(password,"This field minimum character is 6 and maximum character is 20. Please input at this range.");
    }
    else{
        setSuccess(password);
    }
    //confirm-password
    if(passwordval!==cpasswordval){
        setError(cpassword,"Sorry! Your define password and Retype password not match. Please input correct password.");
    }
    else if(cpasswordval.length<6|| cpasswordval.length>20 || cpasswordval==""){
        setError(cpassword,"This field minimum character is 6 and maximum character is 20. Please input at this range.");
    }
    else{
        setSuccess(cpassword);
    }
    //emailid
    const emailval=email.value.trim();
    if(!emailval || emailval==""){
        setError(email,`Email field can't be blank. Required this field.`);
    }
    else setSuccess(email);
    //checkbox
    const checkboxText=button;
    if(checkbox.checked){
        checkboxText.innerText="submit";
        setSuccess(checkbox);
    }
    else{
        checkboxText.innerText="Without Agree TAC submit Disabled";
    }

    return success;
}
function setError(element,message){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector(".error");

    errorElement.innerText=message;
    inputGroup.classList.add("error");
    inputGroup.classList.remove("success");
}
function setSuccess(element){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector(".error");

    errorElement.innerText="";
    inputGroup.classList.add("success");
    inputGroup.classList.remove("error");
}
