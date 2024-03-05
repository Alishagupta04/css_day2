const passwordBox = document.getElementById("password");
// const length = prompt("Enter the Length of Password");
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const specialchars = "!@#$%^&*()";
const allchars = uppercase + lowercase + number + specialchars;
function mypassword() {
    let pass = "";
    for (let i = 0; i < 8; i++) {
        pass += allchars[Math.floor(Math.random() * allchars.length)];
    }
    passwordBox.value = pass;
}
function copyPass() {
    passwordBox.select();
    document.execCommand("copy");
}


function generateclr() {
    let clrgenerate = Math.floor(Math.random() * 16777215).toString(16);
    let randomcolor = "#" + clrgenerate;
    document.getElementById("clrcontainer").style.backgroundColor = randomcolor;
    document.getElementById("colorname").innerText = randomcolor;
}
generateclr()
function copyclr() {
    randomcolor.select();
    document.execCommand("copy");
}

function showcords(event) {
    let x = event.screenX;
    let y = event.screenY;
    document.getElementById("xcor").value = x;
    document.getElementById("ycor").value = y;
}