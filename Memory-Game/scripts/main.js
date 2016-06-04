var cards = ["queen", "queen", "king", "king"],
  board = document.getElementById('board'),
  cardElement = document.createElement('div'),
  button = document.getElementById('clear'),
  cardSelect = document.querySelectorAll('.cards'),
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
  var cardSelect = document.querySelectorAll('.cards');

  if (cardsInPlay[0] === cardsInPlay[1]) {

  } else {
    console.log('sorry, try again');
  }

}
function resetBoard(){
  var button = document.getElementById('clear');

      button.addEventListener('click', function(){
        var cardSelect = document.querySelectorAll('.cards');

        console.log('clicked');

        if(cardsInPlay.length >= 0){

           cardSelect[0].innerHTML = '';
           cardSelect[1].innerHTML = '';
           cardSelect[2].innerHTML = '';
           cardSelect[3].innerHTML = '';

        }else {
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

  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {

    for (var i = 0; i < cards.length; i++) {

      if (cardsInPlay[0] === cards[i] || cardsInPlay[1] === cards[i]) {

        cardSelect[i].innerHTML = '<img src="Images/' + cards[i] + '.png" class="cardImg">';

      }if (cardsInPlay[0] !== cards[i] || cardsInPlay[1] !== cards[i]) {

        cardSelect[i].innerHTML = '';

      } else {

        console.log('guess again!');

      }

    }

    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);
    // clear cards in play array for next try
    cardsInPlay = [];
    resetBoard();
  }

}


createBoard();
