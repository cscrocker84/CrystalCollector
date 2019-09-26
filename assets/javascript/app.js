// Define some variables in the order of how they will appear on the page
var gamestart = false
var target = 0;
var points = 0;
var wins = 0;
var losses = 0;
var crystalOne = {
    value: 0
};
var crystalTwo = {
    value: 0
};
var crystalThree = {
    value: 0
};
var crystalFour = {
    value: 0
};

// random number generator function
function values(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// generate random values for variables
// create a random target number min 15 and max 115

target = values(15, 115);

// crystals values min = 1, max = 12    
crystalone.value = values(1, 12);
crystaltwo.value = values(1, 12);
crystalthree.value = values(1, 12);
crystalfour.value = values(1, 12);

// Start the game, link it back to the html
$(document).ready(function startgame() {
    gamestart = true;
    values();
    $('#target').html("<p>Target: " + target + "</p>")
    valuecheck();
    console.log(target);
    console.log(crystalOne);
    console.log(crystalTwo);
    console.log(crystalThree);
    console.log(crystalFour);
    console.log(gamestart);
});



