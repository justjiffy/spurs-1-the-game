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
var pieceStored;

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
	this.imgStored = false;
}

p1 = new piece(0,3, '<img src="images/p1-sherrif.png" id="p1" />' );
p2 = new piece(0,3, '<img src="images/p2-orin.png" id="p2" />' );

// printBoard(boardArray);

p1inArray = boardArray[p1.col][p1.row];
p2inArray = boardArray[p2.col][p2.row];

function whoseTurn() {
	if (p1.turn===true) { player = p1 } 
	else { player = p2 }
	$('gameCard').html(player);
};

function prevMove() {
	var arrayToChild = parseInt(player.col.toString()+player.row.toString());
	if ( player == p1 && $('#board').children()[arrayToChild].innerHTML.indexOf('orin') > -1 ) {  
			$('#board').children()[arrayToChild].innerHTML = p2.img } 
	else if ( player == p2 && $('#board').children()[arrayToChild].innerHTML.indexOf('sherrif') > -1 ) {
			$('#board').children()[arrayToChild].innerHTML = p1.img }
	else { $('#board').children()[arrayToChild].innerHTML = "" }
};

function currMove() {
	var arrayToChild = parseInt(player.col.toString() + player.row.toString());	
	$('#board').children()[arrayToChild].innerHTML = (player.img + $('#board').children()[arrayToChild].innerHTML);
	whoseTurn();
};

moveRight = function() {
	if ( player.row === 9 || boardArray[player.col][player.row + 1] == "X" ) { $('#board').effect('shake'); }
	else { 
		prevMove();
		player.row++;
		currMove();

	count++ 		 }
};

moveLeft = function() {
	if ( player.row === 0 || boardArray[player.col][player.row - 1] == "X" ) { $('#board').effect('shake'); }
	else { 
		prevMove();
		player.row--;
		currMove(); 
		count++ }
};

moveUp = function() {
	if ( player.col === 0 || boardArray[player.col - 1][player.row] == "X" ) { $('#board').effect('shake'); }
	else { 
		prevMove();
		player.col--;
		currMove(); 
		count++ }
};

moveDown = function() {
	if ( player.col === 22 || boardArray[player.col + 1][player.row] == "X" ) { $('#board').effect('shake') }
	else { prevMove();
		player.col++;
		currMove(); 
		count++ }
};

var start1 = function() {
	$('#popUpContent').html('<p>Hey there lonely stranger, <br> This game is currenly only available in two player mode. Channel your alter ego and click below to keep playing.</p><br><br> <button onClick="start2();">Keep Playing</button> ' );
};

var start2 = function() {
	$('aside').toggle(false);
	p1.turn = true;
	whoseTurn();
	$('#start').html('<img src="images/p1-sherrif.png" class="p1" />').append('<img src="images/p2-orin.png" class="p2" />');
	$('#gameCard').show();
	$('#instruction').show().html('Press Space Bar to Roll Die');
};

var close = function() {
	console.log('close window');
	$('aside').hide();
};

$('html').on('keyup', function(el) {
	if (currRoll - count === 0) { $('#instruction').show() }
	else if (el.keyCode == 39) {
		moveRight(player);
		checkAction();
	}
	else if (el.keyCode == 37) {
		moveLeft(player);
		checkAction();
	}
	else if (el.keyCode == 38) { 
		moveUp(player);
		checkAction();
	}	
	else if (el.keyCode == 40) {
		moveDown(player);
		checkAction();
	}
});

$('html').on('keydown', function(el) {
	if( (el.keyCode == 32) || el.keyCode == 37 || el.keyCode == 38 || el.keyCode == 39 || el.keyCode == 40) {
		el.preventDefault();
		$('#instruction').hide(); }
});


$('body').keyup(function(el) {
	if ( el.keyCode == 32 ) { dieRoll(); 
		if (currRoll === 1) { $('#instruction').show().html('Use Arrow Keys to Move ' + currRoll + ' Space.') }
		else { $('#instruction').show().html('Use Arrow Keys to Move ' + currRoll + ' Spaces.') }
	} 
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

$('#instruction').draggable();
$('#gameCard').draggable();
$('aside').resizable(); //can't be draggable and resizable?? 

//game board actions
function checkAction() {
	p2.imgStored = false;
	p1.imgStored = false;
	if (currRoll == count) {
		if ( player.col == 3 && player.row == 3 ) { 
			if (player.item1 === false) {
			 $('#popUpContent').html("").append(" <br><br><p>You made it to the hospital, but Harden could barely speak. Shaken by the sight of his friend spontaneously combusting, he barely manages to slip you an almost indecipherable note before visitng hours end.</p><br><br><h3>Acquired 1 Item: Harden's Letter</h3><br><br><p>If you can make it through Adam's Ale to the Town Center, maybe you'll have more luck</p><br><br><center><button id='cont'>CONTINUE</button></center> " );
			 $('aside').toggle(true);
			 player.item1 = true;
			 $('#cont').on('click', function() { $('aside').toggle(false) });
			 };
			 nextPlayer();
			}	
		else if ( player.col == 6 && player.row == 7 ) { 
			if (player.item1 === false) { 
				$('#popUpContent').html("Have you visited Harden at the Hospital Yet? <br><br><br><br> <button id='cont'>Keep Playing</button> " ); 
				$('#cont').on('click', function() { $('aside').toggle(false) }); }
				else { $('#popUpContent').html("You got a moment to rest and look at Harden's letter again... it definitely says 'something'"); }
			$('aside').toggle(true); 
			nextPlayer(); 
			}	
		else if ( player.col == 10 && player.row == 7 ) { alert("Welcome to the saloon"); nextPlayer(); }
		else if ( player.col == 9 && player.row == 4 ) { alert("You showed the letter to a guy at the bar, and he was pretty sure he read: 'There's something...' but couldn't make out the rest"); nextPlayer(); }
		else { nextPlayer() }
	}
}



function nextPlayer() {
	if (currRoll == count) { 
		p1.turn = !p1.turn; 
		$('#instruction').html('Next Player - Press Space Bar to Roll Die').show(); 
		whoseTurn();
		}
};
$('#play1player').on('click', function() {
	start1();
});

$('#play2player').on('click', function() {
	start2();
});
