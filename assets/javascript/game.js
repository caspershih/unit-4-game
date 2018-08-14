// defining varibles
var wins = 0;
var loses = 0;
var goal = Math.floor(Math.random()*100);
var gemsCollected = 0;
    
// Defining gems as varibles
var ruby = Math.floor(Math.random()*5) +1;
var sapphire = Math.floor(Math.random()*5) +1;
var emerald = Math.floor(Math.random()*5) +1;
var topaz = Math.floor(Math.random()*5) +1;

//make ruby image into a button
$('#ruby').on('click', function() {
    gemsCollected = gemsCollected + ruby;
    $('#gemsCollected').html("Gems collected: " + gemsCollected);
    if (gemsCollected === goal) {
        win();
    }
    else if (gemsCollected > goal) {
        lose();
    }
});

//make sapphire image into a button
$('#sapphire').on('click', function() {
    gemsCollected = gemsCollected + sapphire;
    $('#gemsCollected').html("Gems collected: " + gemsCollected);
    if (gemsCollected === goal) {
        win();
    }
    else if (gemsCollected > goal) {
        lose();
    }
});

//make emerald image into a button
$('#emerald').on('click', function() {
    gemsCollected = gemsCollected + emerald;
    $('#gemsCollected').html("Gems collected: " + gemsCollected);
    if (gemsCollected === goal) {
        win();
    }
    else if (gemsCollected > goal) {
        lose();
    }
});

//make topaz image into a button
$('#topaz').on('click', function() {
    gemsCollected = gemsCollected + topaz;
    $('#gemsCollected').html("Gems collected: " + gemsCollected);
    if (gemsCollected === goal) {
        win();
    }
    else if (gemsCollected > goal) {
        lose();
    }
});

// When the gems player collected matches the randomly generated gem count, the player wins the game
// If the total gem count excess the ramdon gem numbe, the player lose
// Upon winning or losing the game, a new game will start automatically

function newGame() {
    goal = Math.floor(Math.random()*100);
    $("#goal").html("Goal: " + goal);
    ruby = Math.floor(Math.random()*5) +1;
    sapphire = Math.floor(Math.random()*5) +1;
    emerald = Math.floor(Math.random()*5) +1;
    topaz = Math.floor(Math.random()*5) +1;
    gemsCollected = 0;
};

console.log(newGame);

// call the function newGame
newGame();


// the winning function
function win() {
    alert("GGWP!");
    wins ++;
    $("#wins").html("Wins: " + wins);
    newGame();
};
    
// the losing function
function lose() {
    alert("Sorry, try again!");
    loses ++;
    $("#loses").html("Loses: " + loses);
    newGame();
};
