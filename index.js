const formWrapper=document.querySelector("#form")
const userName = document.querySelector("#username");
const password = document.querySelector("#password");
const btnLogin = document.querySelector("#btn");

userName.addEventListener("focus",focusName)
function focusName(){
    userName.style.outline="1px solid darkfrey"
}

userName.addEventListener("blur",blurName)
function blurName(){
    userName.style.outline=""
}
password.addEventListener("focus",focuspassword)
function focuspassword(){
    password.style.outline="1px solid darkgrey"
}

password.addEventListener("blur",blurPassword)
function blurPassword(){
    password.style.outline=""
}

formWrapper.addEventListener("submit", submitData)

function submitData(e) {
    if (userName.value === "" ||
        password.value === "") {
        alert("please fill all data");
        return;
    }

    e.preventDefault()
    const payload = {
        userName: userName.value,
        password: password.value,
    }
    console.log(payload);
    clearInputfield();
};

function clearInputfield(){
    userName.value="";
    password.value="";
}