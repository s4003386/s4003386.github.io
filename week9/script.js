const myButton = document.querySelector("#owo-button-1");
console.log(myButton);

//doesnt exist in html
const sideDrawer = document.querySelector("#side-drawer");
console.log(sideDrawer);

myButton.addEventListener("click", toggleSideDrawer);

function toggleSideDrawer () {
    if(!isOpened){
        sideDrawer.style.translate = "200px";
        isOpened = true
    } else {
        sideDrawer.style.translate = "0px";
        isOpened = false;
    }
    
}