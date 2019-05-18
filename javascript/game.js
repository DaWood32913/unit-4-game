$(document).ready(function() {

    //Crystal Variables
    var lowEndCrystal = 1;
    var highEndCrystal = 12;
    var crystalValues = [];
    while (lowEndCrystal <= highEndCrystal) {
        crystalValues.push(lowEndCrystal++);
    }

    //The Computer Score 
    var lowEndComputer = 19;
    var highEndComputer = 120;
    var computerValues = [];
    while (lowEndComputer <= highEndComputer) {
        computerValues.push(lowEndComputer++);
    }

    //All Other Variables
    var wins = 0;
    var losses = 0;
    var playerScore = 0;
    var computerScore;
    var crystalsObject;

    // Declare JQuery
    $(".wins").html(wins);
    $(".losses").html(losses);
    $("#playerScore").html(playerScore);
    $("#computerScore").html(computerScore);

    // Start The Game 
    startAndReset();

    // Generate Random Crystal Values
    function random() {
        return Math.floor((Math.random() * crystalValues.length) + 1);
    }

    // Generate Random Scores
    function randomComp() {
        return Math.floor((Math.random() * computerValues.length) + 1);
    }

    // Crystals w/ Random Values
    function crystals() {
        crystalsObject = {
            crystal1: random(),
            crystal2: random(),
            crystal3: random(),
            crystal4: random()
        };
    }

    //Click Events for Crystals + Game Play
    $(".crystal1").on("click", function() {
        $(".crystalScore1").hide(crystalsObject.crystal1);
        playerScore += crystalsObject.crystal1;
        $("#playerScore").html(playerScore);
        checkScores();
    });

    $(".crystal2").on("click", function() {
        $(".crystalScore2").hide(crystalsObject.crystal2);
        playerScore += crystalsObject.crystal2;
        $("#playerScore").html(playerScore);
        checkScores();
    });

    $(".crystal3").on("click", function() {
        $(".crystalScore3").hide(crystalsObject.crystal3);
        playerScore += crystalsObject.crystal3;
        $("#playerScore").html(playerScore);
        checkScores();
    });

    $(".crystal4").on("click", function() {
        $(".crystalScore4").hide(crystalsObject.crystal4);
        playerScore += crystalsObject.crystal4;
        $("#playerScore").html(playerScore);
        checkScores();
    });

    //Check Player vs. Computer Score & Display Wins & Losses
    function checkScores() {
        if (playerScore === computerScore) {
            wins++;
            $(".wins").html(wins);
            startAndReset();

        } else if (playerScore > computerScore) {
            losses++;
            $(".losses").html(losses);
            startAndReset();
        }
    }

    // Start & Reset Game
    function startAndReset() {
        random();
        crystals();
        playerScore = 0;
        $("#playerScore").html(playerScore);
        computerScore = randomComp();
        $("#computerScore").html(computerScore);
    }
});