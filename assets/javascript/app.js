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

