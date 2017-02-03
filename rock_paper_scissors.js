//Rock, Paper, Scissors game

var userChoice = prompt("Do you choose rock, paper or scissors?");

//Computer generates answer
var computerChoice = Math.random();

if (computerChoice < 0.34) {
	computerChoice = "rock";
}
else if(computerChoice <= 0.67) {
	computerChoice = "paper";
}
else {
	computerChoice = "scissors";
}

console.log("Computer: " + computerChoice);

//Logic for determining winner
var compare = function (choice1,choice2)
{
    if(choice1 === choice2) {
        return "The result is a tie!";
    }

    else if(choice1 === "rock") {

        if(choice2 === "scissors") {
            return "Rock wins!";
        }
        else {
            return "Paper wins!";
        }
    }

    else if(choice1 === "paper") {

        if(choice2 === "rock") {
            return "Paper wins!";
        }
        else {
            return "Scissors wins!";
        }
    }

    else if(choice1 === "scissors") {

        if(choice2 === "paper") {
            return "Scissors wins!";
        }
        else {
            return "Rock wins!";
        }
    }
}

//Play!
compare(userChoice, computerChoice);

//Congratulations on making your awesome game!
//But now comes the best bit. You have the skills to
//build a game of your own design! Below are some ideas:

//What if a user makes an inappropriate choice like 'dog'?
//How can we extend the function to handle that?

//What if players in the game could also choose
//Rope in this game?

//In this version, if both players make the same choice,
//the game returns a tie. What if the game didn't end there
//but instead asked both players for new choices?
