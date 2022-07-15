// Update loop
import Ball from "./Ball.js";
import Paddle from "./Paddle.js";

const ball = new Ball(document.getElementById("ball"))
const PlayerPaddle = new Paddle(document.getElementById("player_paddle"))
const ComputerPaddle = new Paddle(document.getElementById("computer_paddle"))
const playerScore = document.getElementById("player-score")
const ComputerScore = document.getElementById("computer-score")

let lastTime


function update(time){
    
    if (lastTime != null){
        const delta = time - lastTime
        // ball.update(delta, [PlayerPaddle.rect(), ComputerPaddle.rect()])
        ComputerPaddle.update(delta, ball.y)
        if (isLose()){
            // console.log("Lose")
            handleLose()
        }
    }
    lastTime = time
    // console.log(time)
    window.requestAnimationFrame(update)

}

function isLose(){
    const rect = ball.rect()
    return rect.right >= window.innerWidth || rect.left <= 0
}

function handleLose(){
    const rect = ball.rect()
    if (rect.right>=window.innerWidth){
        playerScore.textContent = parseInt(playerScore.textContent) + 1
    } else{
        ComputerScore.textContent = parseInt(ComputerScore.textContent) + 1
        
    }
    ball.reset()
    ComputerPaddle.reset()
}

document.addEventListener("mousemove", e => {
    PlayerPaddle.position = (e.y / window.innerHeight)*100
})

window.requestAnimationFrame(update)