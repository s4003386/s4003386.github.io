const vnData = 'vnData.json';
console.log(vnData);

//Initial html insert. Start button page
function insertstartHTML(){
	return `
        <div id='mainbox'>
              <button type="button" id="startButton">Start</button> 
		</div>
    `;
}

// This is what the script tag in the html file is connected to. Mostly everything is just changing stuff via javascript
const htmlData = insertstartHTML();
document.getElementById('VisualNovelEngine').insertAdjacentHTML("beforeend", htmlData);
console.log(htmlData);

// when the user presses the start button, an event listener triggers
document.getElementById("startButton").addEventListener("click", StartButtonPress);

function StartButtonPress(){
    document.getElementById("VisualNovelEngine").innerHTML = 
    `
        <div id='mainbox'>
            <div id='spritebox' class='rightalign'>
                <img src=''>
            </div>
            <div id='spritebox' class='leftalign'>
                <img src=''>
            </div>
            <div id='namebox'>
                <span>Loading...</span>
            </div>
            <div id='textbox'>
                <p>Loading...</p>
                <div id='optionsbox'></div>
            </div>
        </div>`;
    
    // Update the selectors here to ensure they reference the correct elements
    $textbox = document.querySelector("#textbox p");
    $optionsbox = document.querySelector('#optionsbox');
    $namebox = document.querySelector("#namebox span");
    $spritebox = document.querySelectorAll("#spritebox img");
    $mainbox = document.querySelector('#mainbox');
    
    grabData(); // Call the function to fetch data when the Start button is pressed
}

// Constants
let $textbox, $optionsbox, $namebox, $spritebox, $mainbox;
let json, to;
let pageNum = 0;
let currentPage;

// Tracks what "Page Number" the user is on

async function grabData() {
    // Load the data
    /* Fetches the data from the server */
    const resp = await fetch(vnData);

    /* Putting the data into an array */
    json = await resp.json();

    currentPage = Object.keys(json.Scene1.PAGES)[pageNum];

    // Initialize the data
    initialize(json);
    handleOptions(json);
}

// Initializes the data & also handles page turning
function initialize(data){
    // Cleans it all
    $spritebox.forEach(img => img.src = '');
    $namebox.innerText = '';
    $textbox.innerText = '';

    // Changes appropriate HTML elements to the new attributes based on the data given when page turns/ program is initialized
    const currentCharacter = data.Scene1.PAGES[currentPage].Character;
    const currentSprite = data.Scene1.PAGES[currentPage].Sprite;
    $spritebox[0].src = data.Characters[currentCharacter][currentSprite]; // Assuming single sprite for simplicity
    $namebox.innerText = currentCharacter;
    typeWriter(data.Scene1.PAGES[currentPage].PageText);

    $mainbox.style.backgroundImage = "url(" + data.Scene1.Background + ")";
}

function handleOptions(data){
    // Cleans it out
    $optionsbox.innerHTML = "";

    if(data.Scene1.PAGES[currentPage].hasOwnProperty('Options')){
        var o = data.Scene1.PAGES[currentPage].Options;
        Object.keys(o).forEach(k => {
            const row = document.createElement('div');
            row.innerHTML = `${k}`;
            $optionsbox.appendChild(row);
            row.addEventListener('click', () => {
                currentPage = (o[k]);
                pageNum = Object.keys(json.Scene1.PAGES).indexOf(currentPage);
                initialize(json);
                $optionsbox.innerHTML = "";
            });
        });
    }
}

// Typewriter Effect
function typeWriter(txt, i) {
    i = i || 0;
    if(!i) {
        $textbox.innerHTML = '';
        clearTimeout(to);
    }
    var speed = 30; /* The speed/duration of the effect in milliseconds */
    if (i < txt.length) {
        var c = txt.charAt(i++);
        if(c === ' ') c = '&nbsp;';
        $textbox.innerHTML += c;
        to = setTimeout(function() {
            typeWriter(txt, i);
        }, speed);
    }
}

function checkPage(data){
    if(data.Scene1.PAGES[currentPage].hasOwnProperty('Options')) return false;
    if(data.Scene1.PAGES[currentPage].hasOwnProperty('NextPage')) {
        if(data.Scene1.PAGES[currentPage].NextPage == "End") return false;
    }
    return true;
}

// Handles page turning when right or left arrow key is pressed
document.addEventListener('keydown', (e) => {
    if(!json) return;
    if(e.key == "ArrowRight" && checkPage(json)){
        if(json.Scene1.PAGES[currentPage].hasOwnProperty('NextPage')){
            currentPage = json.Scene1.PAGES[currentPage].NextPage;
        } else {
            pageNum++;
            currentPage = Object.keys(json.Scene1.PAGES)[pageNum];
        }
        initialize(json);
        handleOptions(json);
    } else return;
});
