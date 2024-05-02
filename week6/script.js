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

const myProjects = document.querySelectorAll("p");
myProjects.forEach(checkTopics);
function checkTopics(item)
{
    if (item.dataset.topic === web) {
        item.classList.add("purple-box");
    } else if (item.dataset.topic === sound) {
        item.classList.add("orange-box");
    }
}

function toggleMe() {
    let myImg = document.querySelector("#myImage");
    console.log(myImg);
    myImg.classList.toggle("round");
}


