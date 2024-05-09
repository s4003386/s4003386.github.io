<button id="my-button"> button </button>

const myButton = document.querySelector("#my-button");

myButton.addEventListener("click", doSomething);
function doSomething()
{
   console.log("I have been clicked");
}
