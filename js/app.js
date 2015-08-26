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

var count = 0;

function piece(col, row, img) {
	this.col = col;
	this.row = row;
	this.img = "";
	this.item1 = false;
	this.item2 = false;
	this.item3 = false;
	this.item4 = false;
	this.finalAnswer = false;
}

p1 = new piece(0,3,"images/p1-sherrif.png");

p2 = new piece(0,3,"p2piece");

// printBoard(boardArray);

p1inArray = boardArray[p1.col][p1.row];

function prevMove(player) {
	var arrayToChild = parseInt(player.col.toString()+player.row.toString());
	$('#board').children()[arrayToChild].innerHTML = "";
}

function currMove(player) {
	var arrayToChild = parseInt(player.col.toString() + player.row.toString());
	$('#board').children()[arrayToChild].innerHTML = '<img src="images/p1-sherrif.png" />';
}

moveRight = function(player) {
	prevMove(p1);
	player.row++;
	currMove(p1);
};

moveLeft = function(player) {
	prevMove(p1);
	player.row--;
	currMove(p1);
};

moveUp = function(player) {
	prevMove(p1);
	player.col--;
	currMove(p1);
};

moveDown = function(player) {
	prevMove(p1);
	player.col++;
	currMove(p1);
};

var start = function() {
	$('#board').children('#start')[0].innerHTML = '<img src="images/p1-sherrif.png" />';
};

$('html').on('keyup', function(el) {
	if (el.keyCode == 13) { start(); }
	else if (el.keyCode == 39) {
		count++;
		moveRight(p1);
		checkAction();
	}
	else if (el.keyCode == 37) {
		count++;
		moveLeft(p1);
		checkAction();
	}
	else if (el.keyCode == 38) { 
		count++;
		moveUp(p1);
		checkAction(); 
	}	
	else if (el.keyCode == 40) {
		count++;
		moveDown(p1);
		checkAction();
	}
});

$('html').on('keydown', function(el) {
	if( (el.keyCode == 32) || el.keyCode == 37 || el.keyCode == 38 || el.keyCode == 39 || el.keyCode == 40) {
		el.preventDefault();
	}
});

$('body').keyup(function(el) { 
	if ( el.keyCode == 32 ) { return dieRoll(); 
 	};
});

var dieRoll = function() {  
	count = 0;
	var currRole = Math.floor((Math.random()*6)+1);
	if (currRole == 1) { $('#die').html('<img src="images/die-1.jpg" />') }
	else if (currRole == 2) { $('#die').html('<img src="images/die-2.jpg" />') }
	else if (currRole == 3) { $('#die').html('<img src="images/die-3.jpg" />') }
	else if (currRole == 4) { $('#die').html('<img src="images/die-4.jpg" />') }
	else if (currRole == 5) { $('#die').html('<img src="images/die-5.jpg" />') }
	else if (currRole == 6) { $('#die').html('<img src="images/die-6.jpg" />') }
	}

$('aside').draggable();
$('aside').resizable(); //can't be draggable and resizable?? 

//game board options
function checkAction() {
	if ( parseInt($('#die').html()) == count ) {
		if ( p1.col == 3 && p1.row == 3 ) { alert("You made it to the hospital, but Harden could barely speak. Shaken by the sight of his friend spontaneously combusting, he barely manages to slip you an almost indecipherable note before visitng hours end."); p1.item1 = true; }
		else if ( p1.col == 6 && p1.row == 7 ) { alert("You got a moment to rest and look at Harden's letter again... it definitely says 'something'") }
		else if ( p1.col == 10 && p1.row == 7 ) { alert("Welcome to the saloon") }
		else if ( p1.col == 9 && p1.row == 4 ) { alert("You showed the letter to a guy at the bar, and he was pretty sure he read: 'There's something...' but couldn't make out the rest") }
	}
}


