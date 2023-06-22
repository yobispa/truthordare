console.log("JS Loaded");

//variables for the home page
const truthOrDareHeader = document.querySelector(".displayTruthOrDareHeader");
const truthOrDareParagraph  = document.querySelector(".displayTruthOrDare");
const classicVersion = document.querySelector(".classicVrs");
const kindergardenVersion = document.querySelector(".kinderGardenVrs");
const boyfriendGirlfriendVersion = document.querySelector(".boyfriendGirlfriendVrs");
const dirtyVersion = document.querySelector(".dirtyVrs");
const exitBtn = document.querySelector(".exit-button");
const suspenseSound = new Audio('media/suspense.mp3');

//Page 1 & Page 2 function
const changePageLinks = document.querySelectorAll('.change-page');

changePageLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        const gotoPage = link.dataset.gopage;
        const curPage = link.dataset.curpage;
        show(gotoPage, curPage);
    });
});

function show(shown, hidden) {
    document.getElementById(shown).classList.remove('hidden');
    document.getElementById(hidden).classList.add('hidden');
    return false;
}

//function for when the exit button is clicked. Reload the website & The eventlistener for it
function exit() {
    location.reload();
}

function addExitBtn() {
    document.querySelector(".exit-button").classList.remove("hidden")
}

exitBtn.addEventListener("click", function() {
    exit()
});

// Truth of Dare and all mode/version
//Ik heb veel if statements gemaakt voor de random gegenereerde truth of dares. Maar ik heb vandaag pas geleerd over switch case. Maar nu heb ik niet veel tijd om dat te veranderen.

function classicMode() {

    let number = Math.floor(Math.random() * 19);
    
    if (number == 0) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `Do you have a favourite sibling?`;
    }
    if (number == 1) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Let another person post a status on your behalf.`;
    }
    if (number == 2) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `What have you bought that’s been the biggest waste of money?`;
    }
    if (number == 3) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Take a selfie with 5 different bouncers.`;
    }
    if (number == 4) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `What is a secret you have never told anyone?`;
    }
    if (number == 5) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Let the other players go through your phone for one minute. `;
    }
    if (number == 6) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `Do you have a hidden talent?`;
    }
    if (number == 7) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Photobomb a picture.`;
    }
    if (number == 8) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `If you could swap lives with someone in the room, who would it be?`;
    }
    if (number == 9) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Get an item from the bathroom and sell it to the group for 3 minutes.`;
    }
    if (number == 10) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `Do you have a favourite friend?`;
    }
    if (number == 11) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Let another person draw a tattoo on your back with a permanent market.`;
    }
    if (number == 12) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `Name someone you’ve pretended to like but actually couldn’t stand.`;
    }
    if (number == 13) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Drink a mystery drink created by the rest of the group.`;
    }
    if (number == 14) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `If you could become invisible, what’s the worst thing you’d do?`;
    }
    if (number == 15) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Show your search history on your phone.`;
    }
    if (number == 16) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `What’s the worst thing you’ve ever done at work?`;
    }
    if (number == 17) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Let the rest of the group DM someone from your Instagram.`;
    }
    if (number == 18) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `Rate everyone playing from your most to least favourite.`;
    }
    if (number == 19) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Yell out the first word that comes to your mind.`;
    }
}

function kindergardenMode() {
    let number = Math.floor(Math.random() * 19);
    
    if (number == 0) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `What is your favorite fruit?`;
    }
    if (number == 1) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Bite into a slice of lemon.`;
    }
    if (number == 2) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `What job would you like when you grow up?`;
    }
    if (number == 3) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Hop around the room like a bunny.`;
    }
    if (number == 4) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `What are you scared of?`;
    }
    if (number == 5) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Act like a teacher.`;
    }
    if (number == 6) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `What’s the best gift you have ever received?`;
    }
    if (number == 7) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Recite the alphabet backward.`;
    }
    if (number == 8) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `What do you hide under your bed?`;
    }
    if (number == 9) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Walk around the room with a book on your head.`;
    }
    if (number == 10) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `Have you ever done something wrong and blamed it on someone else?`;
    }
    if (number == 11) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Whistle your favorite song while staring into someone’s eyes.`;
    }
    if (number == 12) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `What’s your favorite subject at school?`;
    }
    if (number == 13) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Stare at the person next to you for one minute, without blinking.`;
    }
    if (number == 14) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `Who is the funniest person you know?`;
    }
    if (number == 15) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Pretend to be a monkey and groom your friend’s hair.`;
    }
    if (number == 16) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `Who is your secret crush?`;
    }
    if (number == 17) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Let your friends do your hair. Keep the hairstyle for the rest of the game.`;
    }
    if (number == 18) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `What’s the nicest thing anyone has ever done for you?`;
    }
    if (number == 19) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Sing a song with your tongue sticking out.`;
    }
}

function boyfriendGirlfriendMode() {
    let number = Math.floor(Math.random() * 19);
    
    //TODO change to switch-case
    if (number == 0) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `What's the scariest thing you've ever done?`;
    }
    if (number == 1) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Only answer yes for an hour.`;
    }
    if (number == 2) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `Have you ever cheated on someone?`;
    }
    if (number == 3) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Attempt the first TikTok dance that appears on your for you page.`;
    }
    if (number == 4) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `What is the last lie you told?`;
    }
    if (number == 5) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Twerk along to a boring song until the music stops.`;
    }
    if (number == 6) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `What is something that no one else knows about you?`;
    }
    if (number == 7) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Go live on any social media account and declare your love for me.`;
    }
    if (number == 8) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `What’s your biggest insecurity?`;
    }
    if (number == 9) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Freestyle rap about our relationship.`;
    }
    if (number == 10) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `What is the most annoying thing about me?`;
    }
    if (number == 11) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Put on a blindfold and eat whatever your partner gives you.`;
    }
    if (number == 12) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `If you met a genie, what would your three wishes be?`;
    }
    if (number == 13) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Use a voice changing filter and send a funny voice message to your ex.`;
    }
    if (number == 14) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `When was the last time you cried?`;
    }
    if (number == 15) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Strike up a funny conversation with your parents and hang up abruptly.`;
    }
    if (number == 16) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `What's a bad habit you have?`;
    }
    if (number == 17) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Let your partner give you a makeover.`;
    }
    if (number == 18) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `What’s the one thing you’d do if you knew there were no consequences?`;
    }
    if (number == 19) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Post a 1,000 word Facebook status of gibberish`;
    }
}

function dirtyMode() {
    let number = Math.floor(Math.random() * 19);
    
    if (number == 0) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `Does size really matter?`;
    }
    if (number == 1) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Make eye contact with the person to your right and moan for 10 seconds.`;
    }
    if (number == 2) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `Who was your worst sexual partner and why?`;
    }
    if (number == 3) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Make your orgasm face at the next stranger you see until they make eye contact with you.`;
    }
    if (number == 4) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `Have you ever been caught in action? If so, by who?`;
    }
    if (number == 5) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Google the dirtiest thing you can think of and show it to the person next to you.`;
    }
    if (number == 6) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `What your maddest one-night stand story?`;
    }
    if (number == 7) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Google the dirtiest thing you can think of and show it to the person next to you.`;
    }
    if (number == 8) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `What’s your biggest turn on?`;
    }
    if (number == 9) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Tell us the one bedtime secret no one knows about you.`;
    }
    if (number == 10) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `Where’s the riskiest place you’ve done it?`;
    }
    if (number == 11) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Perform a seductive dance in front of the group.`;
    }
    if (number == 12) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `Have you ever filmed a sex tape?`;
    }
    if (number == 13) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Drop an ice cube in your pants.`;
    }
    if (number == 14) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `Do you have any fetishes?`;
    }
    if (number == 15) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Seductively eat a banana whilst locking eyes with the person to your left.`;
    }
    if (number == 16) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `What’s your biggest turn off?`;
    }
    if (number == 17) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `What’s the largest age gap between you and your sexual partners?`;
    }
    if (number == 18) {
        truthOrDareHeader.innerHTML = `Truth`;
        truthOrDareParagraph.innerHTML = `Do you like loud or silent people in bed?`;
    }
    if (number == 19) {
        truthOrDareHeader.innerHTML = `Dare`;
        truthOrDareParagraph.innerHTML = `Pick up the nearest object to you and demonstrate how to put on protection.`;
    }
}

// Tic Tac Toe

//variables for Tic Tac Toe
let cells = document.querySelectorAll(".box");
let options = ["", "", "", "", "", "", "", "", ""];
let drawChecker = 0;
let xScore = 0;
let oScore = 0;
let playerTurn = 1;
let playerOneName1 = ""
let playerTwoName2 = ""

const restartBtnforGame = document.querySelector(".restartBtnGame");
const restartGameBtn = document.querySelector(".restartGameClass");
const submitButtonClass = document.querySelector(".submitButton");
const makecolorblack = document.querySelectorAll(".makecolorblackClass");
const backgroundcolorBtn = document.querySelector(".articleWrapper2");
const gameColor = document.querySelectorAll(".gameColorClass");
const playerOneBtn = document.querySelector(".playerOne");
const playerTwoBtn = document.querySelector(".playerTwo");
const statusText = document.querySelector(".displayInfo");
const overlay = document.querySelector(".overlayClass");

const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

//eventlistener for player1() and player2()
playerOneBtn.addEventListener("click", player1);
playerTwoBtn.addEventListener("click", player2);


submitButtonClass.disabled = true;
//This saves the names and display it.
function player1() {
    let playerOneName = document.querySelector(".name1").value;
    playerOneName1 = playerOneName
    document.querySelector(".playerOneSubmitted").innerHTML = `Speler 1 &nbsp; is ${playerOneName}<br><p class="align-center">Symbol: X</p>`
    checkInput()
}

function player2() {
    let playerTwoName = document.querySelector(".name2").value;
    playerTwoName2 = playerTwoName
    document.querySelector(".playerTwoSubmitted").innerHTML = `Speler 2 &nbsp; is ${playerTwoName}<br><p class="align-center">Symbol: O</p>`
    checkInput()
}


//check if input text is filled and enable button

function checkInput() {

    if (playerOneName1.length > 0 && playerTwoName2.length > 0) { 

        submitButtonClass.disabled = false;
        playersScore()
    }

    if (playerOneName1.length > 10 || playerTwoName2.length > 10) {
        document.querySelector(".inputValidation").classList.add("inputValidationClass");
        submitButtonClass.disabled = true;
    }

    if (playerOneName1.length < 10 && playerTwoName2.length < 10) {
        document.querySelector(".inputValidation").classList.remove("inputValidationClass");
    }
}

function playersScore() {

    document.querySelector(".playerOneNameClass").innerHTML = `<h1>${playerOneName1}</h1><p class="align-center">Symbol: X</p>`
    document.querySelector(".playerTwoNameClass").innerHTML = `<h1>${playerTwoName2}</h1><p class="align-center">Symbol: O</P>`
}


//it makes the background color when button is clicked.

for(let i = 0; i < makecolorblack.length; i++) {
    makecolorblack[i].addEventListener("click", changeColorHome);
}

for(let i = 0; i < gameColor.length; i++) {
    gameColor[i].addEventListener("click", colorReset);
}

function changeColorHome() {
    document.querySelector("body").classList.add("bg-black")
      
}
function colorReset() {
    document.querySelector("body").classList.remove("bg-black")
}

//eventlistener for all cells.

cells.forEach((cell, index) => cell.addEventListener("click", function() {
    placeMarker(index);
}));

//This function will place the X or O
function placeMarker(index) {

    if (cells[index].textContent !== "") {
        return;
    } else {
        checkPlayerTurn();
    }
    drawChecker++;
    options[index] = currentPlayer;
    cells[index].textContent = currentPlayer; 

    
    checkDraw()
    checkWinner()
}

//check player turn
function checkPlayerTurn() {

    if (playerTurn == 2) {
        currentPlayer = "O";
        playerTurn = 1;
    } else if (playerTurn == 1) {
        currentPlayer = "X";
        playerTurn = 2;
    }
} 


//checkwinner. it will check who won
function checkWinner() {

let roundWon = false;

//It will check if the winpossibelities is true
for (let i = 0; i < winConditions.length; i++){
    const condition = winConditions[i];
    const cellA = options[condition[0]];
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];


    if(cellA == "" || cellB == "" || cellC == ""){
        continue;
    }
    if(cellA == cellB && cellB == cellC){
        roundWon = true;
        break;
    }
}

if(roundWon) {
    

    if (playerTurn == 2) {
        document.querySelector(".playerWonClassAdd").classList.add("playerWonClass");
        document.querySelector(".playerWonClassAdd").innerHTML = `${playerTwoName2} lost!!`
    } else if (playerTurn == 1) {
        document.querySelector(".playerWonClassAdd").classList.add("playerWonClass");
        document.querySelector(".playerWonClassAdd").innerHTML = `${playerOneName1} lost!!`
    }

    winOvrl()

  }
} 



// function restart game. It restarts the game
function restartGameOvrl() {
    options = ["", "", "", "", "", "", "", "", ""];
    
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = "";

    }
    drawChecker = 0;
}

function restartGame() {
    options = ["", "", "", "", "", "" , "", "", ""];
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = "";

    }
    drawChecker = 0;
    playerTurn = 1;
    currentPlayer= "X";
}

//It checks if there a draw
function checkDraw() {

    if (drawChecker == 9){

        options = ["", "", "", "", "", "" , "", "", ""];
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = "";
    
        }
        drawChecker = 0;

    }
}

// Crocodile Bite

//variables for crocodile Bite
const bitesS = document.querySelectorAll(".bite");
const usedBites = [];

bitesS.forEach((bite, index) => bite.addEventListener("click", function() {
    crocodileBite(index);
}));

//It generates a number bewteen 0 to 10
let number = Math.floor(Math.random() * 10);

function crocodileBite(index) {

    //This for loop checks if the bite was clicked twice
    for (let i = 0; i < usedBites.length; i++) {
        if (bitesS[index] == usedBites[i]) {
            alert("You can't choose the same bite twice");
            return;
        }
    }
    //This if statement checks if the bite is the wrong bite and if it is not the wrong bite then it will place a U in the bite and give it an opcacity
    if (index != number) {
        bitesS[index].innerHTML = `<p class="crocodile-used">U</p>`
        usedBites.push(bitesS[index])
        bitesS[index].classList.add("opacity-class");
    //This if statement checks if the bite is choosen one and if it is so than the overlay with the truths or dare will come
    } else if (index == number) {
        winOvrl()
    }    
}

//Choose a number

//variables for choose a number
const submittedNumber = document.querySelector(".input-number");
const submitBtn = document.querySelector(".check-number");

let choosedNumber = Math.floor(Math.random() * 20);
let usedNumberArray = [];

//this eventlistener checks everytime you input. And it checks if you placing only numbers
submittedNumber.addEventListener("input", function(){
    submittedNumber.value = submittedNumber.value.replace(/[^0-9]/g, "");
});

submitBtn.addEventListener("click", specialNumber);

function specialNumber() {

    let number = choosedNumber;

    //this for loop chek if a number is used twice and if it is so then an alert will pop out
    for (let i = 0; i < usedNumberArray.length; i++) {
        if (submittedNumber.value == usedNumberArray[i]) {
            submittedNumber.value = ""
            alert("This number was already used. Please choose another one");
            return;
        }
    }

    //This if statement checks if the number is below 0 and higher than 20 and if it is so than an alert wil pop out
    if (submittedNumber.value < 0 || submittedNumber.value > 20){
        alert("Please choose a number between 0 and 20");
        submittedNumber.value = ""
        return;
    }

    //This will check if the number is not equal to the random choosen number and if it is so then it wil display you are lucky
    if (submittedNumber.value != number) {
        document.querySelector(".display-answer").textContent = `You are lucky`;
        usedNumberArray.push(submittedNumber.value);
        document.querySelector(".display-array").innerHTML = usedNumberArray;
    }

    //This will check if the number is equal to the random choosen number
    if (submittedNumber.value == number) {
        winOvrl()
    }
   
    submittedNumber.value = ""
}

//This is the overlay function. Here it will add an overlay and check which radio type is checken and then run the truth or dare on the radio type that is checked
function winOvrl() {
    document.querySelector(".overlay-hidden").classList.remove("hidden");
    document.querySelector(".truthOrDareClass").classList.add("truthOrDareClassAdd");
    setTimeout(addExitBtn, 5000)

    if (classicVersion.checked) {
        suspenseSound.play();
        setTimeout(function(){
            const audio = new Audio('media/pop.mp3');
            audio.play()
        }, 4700)
        setTimeout(classicMode, 5000);
    } else if (kindergardenVersion.checked) {
        suspenseSound.play();
        setTimeout(function(){
            const audio = new Audio('media/pop.mp3');
            audio.play()
        }, 4700)
        setTimeout(kindergardenMode, 5000);
    } else if (boyfriendGirlfriendVersion.checked) {
        suspenseSound.play();
        setTimeout(function(){
            const audio = new Audio('media/pop.mp3');
            audio.play()
        }, 4700)
        setTimeout(boyfriendGirlfriendMode, 5000);
    }
    if (dirtyVersion.checked) {
        suspenseSound.play();
        setTimeout(function(){
            const audio = new Audio('media/pop.mp3');
            audio.play()
        }, 4700)
        setTimeout(dirtyMode, 5000);
    }
}






