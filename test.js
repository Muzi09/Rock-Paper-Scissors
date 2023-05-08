const play = document.getElementById('play')
let userInput;
let computerInput
let roundResult;

play.addEventListener('click',function () {
    play.style.backgroundColor = "gray"

    const imgItems = document.getElementById('image-items')

    
    // Rock
    const imgRock = document.createElement('img')
    imgRock.src="./assets/IMG_20221115_104615.jpg"
    imgItems.appendChild(imgRock)
    imgRock.id="rock"

    imgRock.addEventListener('click', function () {
        userInput = 0
        computerInput = Math.floor(Math.random()*3)
        roundResult = document.getElementById('round-result') //  0 rock  1 paper  2 scissors


        if (computerInput == 0) {
           roundResult.textContent = "Both selected ROCK. Its a draw"
        }
        else if (computerInput == 1) {
            roundResult.textContent = "Computer selected PAPER. Computer Wins"
            compScore.textContent = parseInt(compScore.textContent) + 1
        }
        else {
            roundResult.textContent = "Computer selected SCISSORS. You Wins"
            playerScore.textContent = parseInt(playerScore.textContent) + 1
        }

        if (compScore.textContent == 5 || playerScore.textContent == 5) {
            endGame()
        }
    })
    

    // Paper
    const imgPaper = document.createElement('img')
    imgPaper.src="./assets/IMG_20221115_104639.jpg"
    imgItems.appendChild(imgPaper)
    imgPaper.id="paper"

    imgPaper.addEventListener('click', function () {
        userInput = 1
        computerInput = Math.floor(Math.random()*3)
        roundResult = document.getElementById('round-result')
        if (computerInput == 0) {
           roundResult.textContent = "Computer selected ROCK. You Wins"
           playerScore.textContent = parseInt(playerScore.textContent) + 1
        }
        else if (computerInput == 1) {
            roundResult.textContent = "Both selected PAPER. Its a draw"
        }
        else {
            roundResult.textContent = "Computer selected SCISSORS. Computer Wins"
            compScore.textContent = parseInt(compScore.textContent) + 1
        }

        if (compScore.textContent == 5 || playerScore.textContent == 5) {
            endGame()
        }
    })

    // Scissors
    const imgScissors = document.createElement('img')
    imgScissors.src="./assets/IMG_20221115_104658.jpg"
    imgItems.appendChild(imgScissors)
    imgScissors.id="scissors"


    imgScissors.addEventListener('click', function () {
        userInput = 2
        computerInput = Math.floor(Math.random()*3)
        roundResult = document.getElementById('round-result')
        if (computerInput == 0) {
           roundResult.textContent = "Computer selected ROCK. Computer Wins"
           compScore.textContent = parseInt(compScore.textContent) + 1
        }
        else if (computerInput == 1) {
            roundResult.textContent = "Computer selected PAPER. You Wins"
            playerScore.textContent = parseInt(playerScore.textContent) + 1
        }
        else {
            roundResult.textContent = "Both selected SCISSORS. Its a draw"
        }

        if (compScore.textContent == 5 || playerScore.textContent == 5) {
            endGame()
        }
    })
}, {once:true})

let playerScore = document.getElementById('player')
let compScore = document.getElementById('comp')


function endGame () {
    const result = document.createElement('div')
    const playAgainButton = document.createElement('button')
    
    if (compScore.textContent > playerScore.textContent) {
        result.textContent = "BETTER LUCK NEXT TIME"
    }
    else {
        result.textContent = "CONGRATULATIONS YOU WON"
    }
    
    playAgainButton.textContent = "Play Again"
    playAgainButton.id = 'play-again'
    result.appendChild(playAgainButton)
    document.body.appendChild(result)    
    result.id = 'result'
    
    playAgainButton.addEventListener('click', function() {
        resetGame()
        document.body.removeChild(result)
    })
}

function resetGame() {
    playerScore.textContent = 0
    compScore.textContent = 0
    roundResult.textContent = ''
    play.style.backgroundColor = ''
}




