// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";


let myVariable = "Bob";
myVariable = "Steve";
// how to comment without using Ctrl + /

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

multiply(2.64, -1.962/8.65);

// document.querySelector("html").addEventListener("click", function () {
//     alert("Ouch! stop poking me!");
// });

document.querySelector("html").addEventListener("click", () => {
    alert(":D");
});

const myImage = document.querySelector("img"); 

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/creeper.jpg");
    } else {
        myImage.setAttribute("src", "images/explosion.jpg");
    }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("please enter you name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
}

if (!localStorage.getItem("name")) {
    setUserName();
}   else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
    setUserName();
});

