var boardArray = [["X", "X", "X", "S", , "", "", "X", "X", "X"],   //row 1  (s = start)
  [ "X", "X", "X", "", "X", "X", "", "X", "X", "X"], //row 2	
  [ "X", "X", "X", "", "X", "X", "", "X", "X", "X"], //row 3
  ["X", "X", "X", "H", "", "", "", "X", "X", "X"],   //row 4      (h = hospital)
  ["X", "X", "X", "X", "X", "X", "", "X", "X", "X"], //row 5
  ["X", "X", "X", "X", "X", "X", "", "X", "X", "X"], //row 6
  ["X", "X", "X", "X", "", "", "", "", "X", "X"],    //row 7
  ["X", "X", "X", "X", "", "X", "X", "", "X", "X"],  //row 8
  ["X", "X", "X", "X", "", "X", "X", "", "X", "X"],  //row 9
  ["X", "X", "X", "X", "", "X", "X", "", "X", "X"],  //row 10
  ["X", "X", "X", "X", "", "", "", "", "X", "X"],    //row 11
  ["X", "X", "X", "X", "X", "X", "", "X", "X", "X"], //row 12
  ["X", "X", "X", "X", "X", "X", "", "X", "X", "X"], //row 13
  ["", "", "", "", "", "", "", "X", "X", "X"],       //row 14
  ["", "X", "X", "", "X", "X", "X", "X", "X", "X"],  //row 15
  ["", "X", "X", "", "X", "X", "X", "X", "X", "X"],  //row 16
  ["", "", "", "", "X", "X", "X", "X", "X", "X"],    //row 17
  ["X", "X", "X", "", "X", "X", "X", "X", "X", "X"], //row 18
  ["X", "X", "X", "", "X", "X", "X", "X", "X", "X"], //row 19
  ["X", "X", "X", "", "", "", "", "X", "X", "X"],    //row 20
  [ "X", "X", "X", "", "X", "X", "", "X", "X", "X"], //row 21
  [ "X", "X", "X", "", "X", "X", "", "X", "X", "X"], //row 22
  [ "X", "X", "X", "", "", "", "F", "X", "X", "X"]]; //row 23   (f = finish);

function printBoard() {
	for (var i = 0; i < boardArray.length; i++) { console.log(boardArray[i]); }
}

var currRoll = 0; 
var count = 0;
var player;

function piece(col, row, img) {
	this.col = col;
	this.row = row;
	this.img = img;
	this.turn = false;
	this.item1 = false;
	this.item2 = false;
	this.item3 = false;
	this.item4 = false;
	this.finalAnswer = false;
	this.imgStored = "";
}

p1 = new piece(0,3, '<img src="images/p1-sherrif.png" class="p1" />' );
p2 = new piece(0,3, '<img src="images/p2-orin.png" class="p2" />' );

// printBoard(boardArray);

p1inArray = boardArray[p1.col][p1.row];
p2inArray = boardArray[p2.col][p2.row];

function whoseTurn() {
	if (p1.turn===true) { player = p1 } 
	else { player = p2 }
};

function prevMove() {
	var arrayToChild = parseInt(player.col.toString()+player.row.toString());
	if (p2.imgStored == p2.img) { $('#board').children()[arrayToChild].innerHTML = p2.img }
	else if (p2.imgStored == p2.img) { $('#board').children()[arrayToChild].innerHTML = p1.img }
	else { $('#board').children()[arrayToChild].innerHTML = "" } 
	// (function() {
	// if ( $('#board').children()[arrayToChild].innerHTML.indexOf('orin') != -1 ) { console.log('orin was there') }
	// else if ($('#board').children()[arrayToChild].innerHTML.indexOf('sherrif') != -1) { console.log('sherrif was there') } 
	// else if ( 1 == 1 ) { $('#board').children()[arrayToChild].innerHTML = "" } 	)}
};

function currMove() {
	var arrayToChild = parseInt(player.col.toString() + player.row.toString());
	console.log('p2.imgStored'); 	
	$('#board').children()[arrayToChild].innerHTML = player.img;
	whoseTurn();
	p2.imgStored = "";
	p1.imgStored = "";
};

function checkSquare() {
	var arrayToChild = parseInt(player.col.toString() + player.row.toString());
	if ( $('#board').children()[arrayToChild].innerHTML.indexOf('orin') != -1) { p2.imgStored = p2.img } 
	else if ( $('#board').children()[arrayToChild].innerHTML.indexOf('sherrif' != -1) ) { p1.imgStored = p1.img }
}; 	

moveRight = function() {
	if (player.row == 9) { $('#board').effect('shake'); }
	else { checkSquare();
		prevMove(player);
		player.row++;
		currMove(player); }
};

moveLeft = function() {
	if (player.row === 0) { $('#board').effect('shake'); }
	else { checkSquare();
		prevMove(player);
		player.row--;
		currMove(player); }
};

moveUp = function() {
	if (player.col === 0) { $('#board').effect('shake'); }
	else { checkSquare();
		prevMove(player);
		player.col--;
		currMove(player); }
};

moveDown = function() {
	if (player.col === 22) { $('#board').effect('shake') }
	else { checkSquare();
		prevMove(player);
		player.col++;
		currMove(player); }
};

var start = function() {
	p1.turn = true;
	whoseTurn();
	$('#start').html('<img src="images/p1-sherrif.png" class="p1" />').append('<img src="images/p2-orin.png" class="p2" />');
	$('#gameCard').show();
};

$('html').on('keyup', function(el) {
	if (el.keyCode == 39) {
		count++;
		moveRight(player);
		checkAction();
	}
	else if (el.keyCode == 37) {
		count++;
		moveLeft(player);
		checkAction();
	}
	else if (el.keyCode == 38) { 
		count++;
		moveUp(player);
		checkAction();
	}	
	else if (el.keyCode == 40) {
		count++;
		moveDown(player);
		checkAction();
	}
});

$('html').on('keydown', function(el) {
	if( (el.keyCode == 32) || el.keyCode == 37 || el.keyCode == 38 || el.keyCode == 39 || el.keyCode == 40) {
		el.preventDefault() }
});


$('body').keyup(function(el) { 
	if ( el.keyCode == 32 ) { return dieRoll() } 
});

var dieRoll = function() {  
	count = 0;
	currRoll = Math.floor((Math.random()*6)+1);
	if (currRoll == 1) { $('#die').html('<img src="images/die-1.jpg" />') }
	else if (currRoll == 2) { $('#die').html('<img src="images/die-2.jpg" />') }
	else if (currRoll == 3) { $('#die').html('<img src="images/die-3.jpg" />') }
	else if (currRoll == 4) { $('#die').html('<img src="images/die-4.jpg" />') }
	else if (currRoll == 5) { $('#die').html('<img src="images/die-5.jpg" />') }
	else if (currRoll == 6) { $('#die').html('<img src="images/die-6.jpg" />') }
};

$('#gameCard').draggable();
$('aside').resizable(); //can't be draggable and resizable?? 

//game board actions
function checkAction() {
		if (currRoll == count) {
			if ( player.col == 3 && player.row == 3 ) { 
				if (player.item1 === false) {
				 $('#popUpContent').html("").append(" <p>You made it to the hospital, but Harden could barely speak. Shaken by the sight of his friend spontaneously combusting, he barely manages to slip you an almost indecipherable note before visitng hours end.</p> <h3>Acquired 1 Item: Harden's Letter</h3><br> <center><button id='cont'>CONTINUE</button></center> " );
				 $('aside').toggle(true);
				 player.item1 = true;
				 $('#cont').on('click', function() { $('aside').toggle(false) });
				 nextPlayer(); }
				}	
			else if ( player.col == 6 && player.row == 7 ) { alert("You got a moment to rest and look at Harden's letter again... it definitely says 'something'"); nextPlayer(); }
			else if ( player.col == 10 && player.row == 7 ) { alert("Welcome to the saloon"); nextPlayer(); }
			else if ( player.col == 9 && player.row == 4 ) { alert("You showed the letter to a guy at the bar, and he was pretty sure he read: 'There's something...' but couldn't make out the rest"); nextPlayer(); }
			else { nextPlayer() }
		}
}



function nextPlayer() {
	if (currRoll == count) { 
		p1.turn = !p1.turn; 
		alert('next player'); 
		whoseTurn();
		}
};

$('#play1player').on('click', function() {
	$('aside').toggle(false);
	start();
});
