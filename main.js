// Sets score variables at the beginning.
var humanTeam = 0
var compTeam = 0

const rpsbuttons = document.getElementById("rpsbuttons");
const message = document.querySelector('#message');

game()

function game() { 
// Listens for user click choice.
const button = document.querySelectorAll("#rock, #paper, #scissors");
button.forEach((button) => {
button.addEventListener('click', (e) => {
    var humPlay = button.id;
    window.humanPlay = humPlay;
    playRound();
// Stops game when someone wins.
    if (humanTeam === 3) {
        message.textContent = 'Congratulations! You won the best of 5 match!'
        const extraLine = document.createElement('div');
        message.appendChild(extraLine);
        playAgainButton();
    }
    else if (compTeam === 3) {
        message.textContent = 'Oh no! You lost the best of 5 match'
        const extraLine = document.createElement('div');
        message.appendChild(extraLine);
        playAgainButton();
    }
});
});
}

// Generates the "Play Again" button at the end of the game.
function playAgainButton () {
    rock.parentNode.removeChild(rock);
    paper.parentNode.removeChild(paper);
    scissors.parentNode.removeChild(scissors);
    const playAgain = document.createElement('button');
    playAgain.classList.add('playAgain');
    playAgain.textContent = "Play Again?"
    message.appendChild(playAgain);

    // Listens for reset button click and resets the game.
    const resetbutton = document.querySelector('button.playAgain');
    resetbutton.addEventListener('click', () => {
        window.humanTeam = 0;
        window.compTeam = 0;

        const humanScore = document.querySelector('#humanscore');
        const computerScore = document.querySelector('#computerscore');
        computerScore.textContent = "Computer: " + ( humanTeam )
        humanScore.textContent = "You: " + ( compTeam )
        message.textContent = ''

        const rock = document.createElement('div');
        rock.setAttribute("id", "rock");
        rpsbuttons.appendChild(rock);

        const paper = document.createElement('div');
        paper.setAttribute("id", "paper");
        rpsbuttons.appendChild(paper);

        const scissors = document.createElement('div');
        scissors.setAttribute("id", "scissors");
        rpsbuttons.appendChild(scissors);

        game();

});

}

// Randomly chooses a computer option.
function computerPlay() {
        var computerPick = [
            "rock",
            "paper",
            "scissors"
            ];

        var randomItem = computerPick[Math.floor(Math.random()*computerPick.length)];
        return randomItem
    }

// Play an individual round of rock, paper, scissors.
function playRound() {
    var computerSelection = computerPlay()
    var playerSelection = humanPlay;

    const humanScore = document.querySelector('#humanscore');
    const computerScore = document.querySelector('#computerscore');

    switch (playerSelection + computerSelection) {
    case "rockrock":
        message.textContent = 'You tied! Rock equals rock.'
        break;
        
    case "rockpaper":
        message.textContent = 'You lost! Paper beats rock.'
        computerScore.textContent = "Computer: " + ( ++compTeam )
        break;

    case "rockscissors":
        message.textContent = 'You won! Rock beats scissors.'
        humanScore.textContent = "You: " + ( ++humanTeam )
        break;

    case "paperpaper":
        message.textContent = 'You tied! Paper equals paper.'
        return 'tied'
        break;

    case "paperrock":
        message.textContent = 'You won! Paper beats rock.'
        humanScore.textContent = "You: " + ( ++humanTeam )
        break;

    case "paperscissors":
        message.textContent = 'You lost! Scissors beats paper.'
        computerScore.textContent = "Computer: " + ( ++compTeam )
        break;

    case "scissorsscissors":
        message.textContent = 'You tied! Scissors equals scissors.'
        break;

    case "scissorsrock":
        message.textContent = 'You lost! Rock beats scissors.'
        computerScore.textContent = "Computer: " + ( ++compTeam )
        break;

    case "scissorspaper":
        message.textContent = 'You won! Scissors beats paper.'
        humanScore.textContent = "You: " + ( ++humanTeam )
        break;
    
    default:
        alert('Oh no! Something went wrong. Did you input a valid selection?')
}
}