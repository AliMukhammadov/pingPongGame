
let player1 = document.querySelector('.player1score')
let player2 = document.querySelector('.player2score')
let btnPlayer1 = document.querySelector('.btnplayer1')
let btnPlayer2 = document.querySelector('.btnplayer2')
let raundSoni = document.getElementById('pinpong')
let reset = document.querySelector('.reset')

let scorePlayer1 = 0
let scorePlayer2 = 0
let gameLevel = parseInt(raundSoni.value)
let gameOver = false

btnPlayer1.addEventListener('click', function () {
  if (!gameOver) {
    scorePlayer1++
    if (scorePlayer1 === gameLevel) {
      gameOver = true
      player1.classList.add('green')
      player2.classList.add('red')
    }
  }
  player1.textContent = scorePlayer1
})

btnPlayer2.addEventListener('click', function () {
  if (!gameOver) {
    scorePlayer2++
    if (scorePlayer2 === gameLevel) {
      gameOver = true
      player2.classList.add('green')
      player1.classList.add('red')
    }
  }
  player2.textContent = scorePlayer2
})

raundSoni.addEventListener('change', function (e) {
  gameLevel = parseInt(raundSoni.value)
  ochirish()
})

reset.addEventListener('click', function () {
  ochirish()
})

function ochirish() {
  gameOver = false
  scorePlayer1 = 0
  scorePlayer2 = 0
  player1.textContent = 0
  player1.classList.remove('green', 'red')
  player2.textContent = 0
  player2.classList.remove('red', 'green')
}

