/*   The Memory Game */

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";




var createCards = function(){

var gameBoard = document.getElementById('game-board');

for(var i = 1; i <= 4; i++){

  //Create newCard as a Div 

	var newCard = document.createElement('div');

  //NewCard now has a class of "card"	
	newCard.className = 'card';
	
  // Append card to the board	
	gameBoard.appendChild(newCard);
	}
}

createCards();





/*
}


if(cardOne === cardTwo){
	alert("You found a match");
}

else if (cardThree === cardFour){
alert("You found a match");
}

else if (cardOne === cardFour){
	alert("Sorry, try again.")
}

*/