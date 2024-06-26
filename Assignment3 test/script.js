const vnData = 'vnData.json';
console.log(vnData);

// Initial HTML insert. Start button page
function insertstartHTML(){
	return `
        <div id='mainbox'>
              <button type="button" id="startButton">Start</button> 
		</div>
    `;
}

// This is what the script tag in the HTML file is connected to. Mostly everything is just changing stuff via JavaScript
//note to self, insertAdjacentHTML(position (Beforeend Just inside the element, after its last child. Thanks mozilla), text)


const htmlData = insertstartHTML();
document.getElementById('VisualNovelEngine').insertAdjacentHTML("beforeend", htmlData);
console.log(htmlData);

// When the user presses the start button, an event listener triggers and creates the needed inner html(?is that the right term) for the dialogue boxes and etc
document.getElementById("startButton").addEventListener("click", StartButtonPress);

function StartButtonPress(){
    document.getElementById("VisualNovelEngine").innerHTML = 
    `
        <div id='mainbox'>
            <div id='spritebox' class='rightalign'>
                <img src=''>
            </div>
            <div id='spritebox2' class='leftalign'>
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
    



    // selectors to make sure the rest of the javascript get the correct elements from the 'html'
    
    //pretty self explanitory
    $textbox = document.querySelector("#textbox p");
    //when making choices in the dialogue section, this is used
    $optionsbox = document.querySelector('#optionsbox');
    //for names of characters
    $namebox = document.querySelector("#namebox span");
    //right side spritebox
    $spritebox = document.querySelector("#spritebox img");
    //left side spritebox
    $spritebox2 = document.querySelector("#spritebox2 img");
    //the entire 'box' that contains everything
    $mainbox = document.querySelector('#mainbox');
    
    grabData(); // Call the function to fetch data when the Start button is pressed
}

// Constants
let $textbox, $optionsbox, $namebox, $spritebox, $spritebox2, $mainbox;
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
    $spritebox.src = '';
    $spritebox2.src = '';
    $namebox.innerText = '';
    $textbox.innerText = '';

    // Changes appropriate HTML elements to the new attributes based on the data given when page turns/ program is initialized
    const currentCharacter = data.Scene1.PAGES[currentPage].Character;
    const currentSprite = data.Scene1.PAGES[currentPage].Sprite;
    const currentAlign = data.Scene1.PAGES[currentPage].Align;

    if (currentCharacter !== "Null") {
        if (currentAlign === 'Right') {
            $spritebox.src = data.Characters[currentCharacter][currentSprite];
        } else if (currentAlign === 'Left') {
            $spritebox2.src = data.Characters[currentCharacter][currentSprite];
        }
        $namebox.innerText = currentCharacter;
    }

    typeWriter(data.Scene1.PAGES[currentPage].PageText);

    $mainbox.style.backgroundImage = "url(" + data.Scene1.Background + ")";
}

function handleOptions(data){
    // Cleans it out
    $optionsbox.innerHTML = "";
//to be honest, I got no clue how this works. Where this is from is down below
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

// Handles page turning when right or left arrow key is pressed. To be honest, just use the arrowkeys and click the options. Clicking is clunky and I cant really be bothered fixing it
document.addEventListener('keydown', (e) => {
    if(!json) return;
    if(e.key == "ArrowRight" && checkPage(json)){
        turnPage();
    } else return;
});

// Handles page turning when the main box is clicked
document.addEventListener('click', (e) => {
    if(e.target.id === 'mainbox' && checkPage(json)){
        turnPage();
    }
});

function turnPage() {
    if(json.Scene1.PAGES[currentPage].hasOwnProperty('NextPage')){
        currentPage = json.Scene1.PAGES[currentPage].NextPage;
    } else {
        pageNum++;
        currentPage = Object.keys(json.Scene1.PAGES)[pageNum];
    }
    initialize(json);
    handleOptions(json);
}




function Investigationarea1() {
    document.getElementById("VisualNovelEngine").innerHTML = 
    `
        <div id='mainbox'>

            <div id='InvestigationClickBox'>
                <span>Loading...</span>
            </div>

        </div>`;
}




/*A lot of the 'base' code did come from https://app.qoom.io/tutorials/vnengine/guide.md
What was copied was the ability to use json for the text to make a 'game'. 
of course, I added some of my own stuff (start button, different sprite functionality etc)
honestly though, i'd have no clue what to do without the above because I've literally never done this kind of thing before, and I totally bit off more than I can chew. Hence the really bad state this is in right now
although thats probably pretty obvious considering like, a lot of it wasnt covered in class
This was also just mostly because I'm not suuuper familiar with html/java/css yet and this guide is super helpful-ish

ps. I'm actuall not sure this is allowed and I probably should have asked first but I did run the script through gpt at some point to debug. Mostly for when I tried to add a left sprite and just kinda went ??? because I accidentally just broke the thing. Like the line that has !== character null was gpt just to be clear. I'm not sure if conversation logs/changelogs can be sent but it really is just proofreading when I saw that bugs happened, and subsequently chatGPT causing more bugs anyways and thus giving up. 
honestly I'm totally prepared to take a 0 and move on.  I'm like dying from my other assignments. 

Saying this because I did read the assignment page about no external libraries and etc so I'm not even sure if this is allowed and its a day before the assignment because I focused on my other assigngments which was due like, yesterday

Also for some reason, the images work fine locally but break entirely when uploaded to github and its just the sprites, which makes me go ???

If your wondering why there is a link below also, Its literally just to show that I was writing things other than 'hurr scene 1 page 2' 


*/

//https://docs.google.com/document/d/1D-DCyVmXteRMbuq0wwHpmItCN_l6sb9Kp0ZuMmF_-eY/edit?usp=sharing