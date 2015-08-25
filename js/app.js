// $(function() {	

boardArray = [["X", "X", "X", "S", , "", "", "X", "X", "X"],   //row 1  (s = start)
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
	for (var i = 0; i < boardArray.length; i++) {
		console.log(boardArray[i]);
	}
}


count = 0; 

function piece(col, row, img) {
	this.col = col;
	this.row = row;
	this.img = "";
}

p1 = new piece(0,3,"images/p1-sherrif.png");

p2 = new piece(0,3,"p2piece");

printBoard(boardArray);

p1inArray = boardArray[p1.col][p1.row];

function prevMove() {
	var arrayToChild = parseInt(p1.col.toString()+p1.row.toString());
	$('#board').children()[arrayToChild].innerHTML = "";
}

function p1piece() {
	var arrayToChild = parseInt(p1.col.toString() + p1.row.toString()); 
	$('#board').children()[arrayToChild].innerHTML = '<img src="images/p1-sherrif.png" />';
}

moveRight = function(player) {
 	prevMove();
 	player.row++;
 	p1piece();
}

moveLeft = function(player) {
 	prevMove();
 	player.row--;
 	p1piece();
}

moveUp = function(player) {
	prevMove();
	player.col--;
	p1piece();
}

moveDown = function(player) {
	prevMove();
	player.col++;
	p1piece();
}

var start = function() {
		$('#board').children('#start')[0].innerHTML = '<img src="images/p1-sherrif.png" />';
};

$('html').on('keyup', function(el) {
	if (count === 0 && el.keyCode == 32) {
			start();
			count++; 
	}
	else if (count > 0 && el.keyCode == 39) {
			count++;
			console.log(count);
			moveRight(p1);
			checkAction();
	}
	else if (count > 0 && el.keyCode == 37) {
		count++;
		console.log(count);
		moveLeft(p1);
		checkAction();
	}
	else if (count > 0 && el.keyCode == 38) {
		count++;
		console.log(count);
		moveUp(p1);
		checkAction();
	}	
	else if (count > 0 && el.keyCode == 40) {
		count++;
		console.log(count);
		moveDown(p1);
		checkAction();
	}
});

$('html').on('keydown', function(el) {
		if( (el.keyCode == 32) ||
		   el.keyCode == 37 ||
		   el.keyCode == 38 ||
		   el.keyCode == 39 ||
		   el.keyCode == 40
		   ) {
			el.preventDefault();
		}
});

$('body').keyup(function(el) {
	if(el.keyCode == 32 && count > 0) {
		return dieRoll(); 
	}
});

var dieRoll = function() {
	$('#die').html((Math.floor((Math.random()*6)+1)))
};

$('aside').draggable(); 
$('aside').resizable(); //can't be draggable and resizable?? 

//game board options

function checkAction() { 
	if (p1.col == 3 && p1.row == 3) {
		alert("you're at the hospital!")
	}
	else { console.log('nuffin yet') }
};


  // });


