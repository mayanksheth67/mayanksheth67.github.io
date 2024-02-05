const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/messi.jpg") {
    myImage.setAttribute("src", "images/messi2.jpg");
  } else {
    myImage.setAttribute("src", "images/messi.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Name a better footballer");
    localStorage.setItem("name", myName);
    if(!myName){
        setUserName();
    }
    myHeading.textContent = `Messi is the best player in the world, not ${myName}`;
}


if (!localStorage.getItem("name")) {
setUserName();
} else {
const storedName = localStorage.getItem("name");
myHeading.textContent = `Messi is the best player in the world, not ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};
  
  