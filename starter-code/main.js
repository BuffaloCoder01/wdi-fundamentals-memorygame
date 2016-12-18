 /*   The Memory Game */


function createCards(){

var gameBoard = document.getElementById('game-board');

for(var i = 1; i <= 4; i++){

  //Create newCard as a Div 

	var newCard = document.createElement('div');

  //Add Class of .card to the NewCard	
	newCard.className = 'card';
	
  // Append card to the board	
	gameBoard.appendChild(newCard);
	}
}


createCards();




var cardsInPlay = [];

function createBoard() {

	var cards = ["queen", "queen", "king", "king"];
    var cardArr = document.getElementsByClassName("card");
    for(var j = 0; j < cards.length; j++){

    cardArr[j].setAttribute("data-card", cards[j]);
	  cardArr[j].addEventListener("click", isTwoCards)
    cardArr[j].addEventListener("click", isTwoCards)

	}
}


createBoard();








//checks to see if there are cards in play
function isTwoCards() {

  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));

  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for next try
    cardsInPlay = [];

  }

}


var isMatch = function(){

if(cardsInPlay[0] === cardsInPlay[1]){

  alert("You chose correctly");
}
else{

  alert("You lose, try again");
}


}

















/*****
if(cardOne === cardTwo){
	alert("You found a match");
}

else if (cardThree === cardFour){
alert("You found a match");
}

else if (cardOne === cardFour){
	alert("Sorry, try again.")
}

**************/