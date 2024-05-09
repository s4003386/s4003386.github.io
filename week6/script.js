//const myPara = document.querySelector("p");
//console.log(myPara);

//const myColors = ["purple-box", "coral-box", "line-box"];


//for (let i = 0; i<3; i++){
//    myPara[i].classList.add(myColors[i]);
//    myPara[i].textContent = "new para" + i;
//}

let myButton = document.querySelector("#my-button");
console.log(myButton);
myButton.addEventListener("click", toggleMe);



function toggleMe() {
    let myImg = document.querySelector("#myImage");
    console.log(myImg);
    myImg.classList.toggle("round");
}


//const myProjects = document.querySelectorAll("p");
//myProjects.forEach(checkTopics);
//function checkTopics(item)
//{
//    if (item.dataset.topic === "web") {
//        item.classList.add("purple-box");
//    } else if (item.dataset.topic === "sound") {
//        item.classList.add("coral-box");
//    }
//}

const myImg = document.querySelector("my-Image")

myImg.addEventListener("mouseover", makeItRound);
myImg.addEventListener("mouseout", makeItSquare);

function makeItRound() {
    myImg.classList.add("round");

}

function.makeItSquare() {
    myImg.classList.remove("round");
}


const courseName = "meow";
const myHeading = document.querySelector("h1");
myHeading.textContent = "new heading";
myHeading.innerHTML = `new <span class="coral-box">${courseName} heading </span>`;
