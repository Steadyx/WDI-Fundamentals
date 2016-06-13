var cards = ["queen", "queen", "king", "king"],
  board = document.getElementById('board'),
  scoreBoard = document.querySelector('.scorecard'),
  currentScore = document.createElement('p'),
  winText = document.querySelector('.win-match'),
  cardElement = document.createElement('div'),
  button = document.getElementById('clear'),
  cardSelect = document.querySelectorAll('.cards'),
  score = 0;
  cardsInPlay = [];


function createBoard() {

  for (var i = 0; i < cards.length; i++) {
    var div = document.createElement('div');
    div.setAttribute('class', 'cards');
    div.setAttribute('data-card', cards[i]);
    board.appendChild(div);
    div.addEventListener('click', isTwoCards);
  }

}

function isMatch() {
  var cardSelect = document.querySelectorAll('.cards'),
      winScore = document.getElementById('score');

  if (cardsInPlay[0] === cardsInPlay[1]) {
    winText.style.display = 'flex';
     score += 1;
    winScore.innerHTML = 'Your score is: ' + score;

    setTimeout(function() {
      winText.style.display = 'none';
    }, 500);
  } else {
    score -= 1;
    winScore.innerHTML = 'Your score is: ' + score;

  }

}

function resetBoard() {
  var button = document.getElementById('clear');
  button.addEventListener('click', function() {
    var cardSelect = document.querySelectorAll('.cards');
    winScore = document.getElementById('score');

    console.log('clicked');

    if (cardsInPlay.length >= 0) {
      for (var i = 0; i < cardSelect.length; i++) {
        cardSelect[i].innerHTML = '';
        winText.style.display = 'none';
        winScore.innerHTML = '';
        score = 0;
      }

    } else {
      console.log('must have atleast two cards in play');
    }
  });
}

function isTwoCards(el) {
  var congrats = document.createElement('div'),
    cardSelect = document.querySelectorAll('.cards');

  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));

  if (this.getAttribute('data-card') === 'king') {

    this.innerHTML = '<img src="Images/king.png" class="cardImg">';

  } else {

    this.innerHTML = '<img src="Images/queen.png" class="cardImg">';

  }
  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];

  }

  // pass the cardsInPlay as an argument to isMatch function
  // clear cards in play array for next try
  resetBoard();
}



createBoard();
