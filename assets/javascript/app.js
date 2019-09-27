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
crystalOne.value = values(1, 12);
crystalTwo.value = values(1, 12);
crystalThree.value = values(1, 12);
crystalFour.value = values(1, 12);

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

$("#crystal1").on("click", function () {

    if (gamestart === true) {
        points += crystalOne.value;
        console.log(crystalOne);
        $('#crystalpointssum').html("<p>Points: " + points + "</p>");
    }
});

$("#crystal2").on("click", function () {

    if (gamestart === true) {
        points += crystalTwo.value;
        console.log(crystalTwo);
        $('#crystalpointssum').html("<p>Points: " + points + "</p>");
        
    }
});



$("#crystal3").on("click", function () {

    if (gamestart === true) {
        points += crystalThree.value;
        console.log(crystalThree);
        $('#crystalpointssum').html("<p>Points: " + points + "</p>");
        
    }
});

$("#crystal4").on("click", function () {

    if (gamestart === true) {
        points += crystalFour.value;
        console.log(crystalFour);
        $('#crystalpointssum').html("<p>Points: " + points + "</p>");
        
    }
});



