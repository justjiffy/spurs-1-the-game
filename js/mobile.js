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
	this.clue1 = false;
	this.clue2 = false;
	this.clue3 = false;
	this.clue4 = false;
	this.p1only = false;
}

p1 = new piece(0,3, '<img src="images/p1-sherrif.png" id="p1" />' );
p2 = new piece(0,3, '<img src="images/p2-orin.png" id="p2" />' );

// printBoard(boardArray);

p1inArray = boardArray[p1.col][p1.row];
p2inArray = boardArray[p2.col][p2.row];

function whoseTurn() {
	if (p1.p1only === true) { player = p1; }
	else if (p1.turn === true) { player = p1; $('#p1-turn').addClass('myturn'); $('#p2-turn').removeClass('myturn'); }
	else { player = p2; $('#p2-turn').addClass('myturn'); $('#p1-turn').removeClass('myturn'); }
}

function prevMove() {
	var arrayToChild = parseInt(player.col.toString()+player.row.toString());
	if ( player == p1 && $('#board').children()[arrayToChild].innerHTML.indexOf('orin') > -1 ) {
		$('#board').children()[arrayToChild].innerHTML = p2.img; }
	else if ( player == p2 && $('#board').children()[arrayToChild].innerHTML.indexOf('sherrif') > -1 ) {
		$('#board').children()[arrayToChild].innerHTML = p1.img; }
	else { $('#board').children()[arrayToChild].innerHTML = ""; }
}

function currMove() {
	var arrayToChild = parseInt(player.col.toString() + player.row.toString());	
	$('#board').children()[arrayToChild].innerHTML = (player.img + $('#board').children()[arrayToChild].innerHTML);
	whoseTurn();
}

moveRight = function() {
	if ( player.row === 9 || boardArray[player.col][player.row + 1] == "X" ) { $('#board').effect('shake'); }
	else {
	prevMove();
	player.row++;
	currMove();
	count++;}
};

moveLeft = function() {
	if ( player.row === 0 || boardArray[player.col][player.row - 1] == "X" ) { $('#board').effect('shake'); }
	else {
		prevMove();
		player.row--;
		currMove();
		count++; }
};

moveUp = function() {
	if ( player.col === 0 || boardArray[player.col - 1][player.row] == "X" ) { $('#board').effect('shake'); }
	else {
		prevMove();
		player.col--;
		currMove();
		count++; }
};

moveDown = function() {
	if ( player.col === 22 || boardArray[player.col + 1][player.row] == "X" ) { $('#board').effect('shake'); }
	else { prevMove();
		player.col++;
		currMove();
		count++; }
};

var start1 = function() {
	$('aside').toggle(false);
	p1.turn = true;
	whoseTurn();
	$('#start').html(p1.img);
	$('#navigation').show();
	$('#gameCard').show();
	$('#instruction').show().html('Tap Screen to Roll Die');
	$('#p2-status').hide();
	p1.p1only = true;
};

var start2 = function() {
	$('aside').toggle(false);
	p1.turn = true;
	whoseTurn();
	$('#start').html(p1.img).append(p2.img);
	$('#gameCard').show();
	$('#instruction').show().html('Tap Screen to Roll Die');
};

var close = function() {
	console.log('close window');
	$('aside').hide();
};

//TRIGGERS GAME KEYS (spacebar = 0, etc...)
// $('html').on('keyup', function(el) {
// if (currRoll - count === 0) { $('#instruction').show(); }  ==> if 
	$('#left').on('click', function() { moveRight(player);} );
	$('#right').on('click', function() { moveLeft(player);} );
	$('#up').on('click', function() { moveUp(player);} );
	$('#down').on('click', function() { moveDown(player);} );
// ; } ==> else if ()
//	else if (el.keyCode == 37) { moveLeft(player); }
//	else if (el.keyCode == 38) { moveUp(player); }
//	else if (el.keyCode == 40) { moveDown(player); }
//	checkAction();
// });

//make a eventlistening function
// have an event listners for..
$('#die').on('click', function() {
	dieRoll();
});

// DISABLES DEFAULT KEYCODE FUNCTIONS

// $('html').on('keydown', function(el) {
// 	if( (el.keyCode == 32) || el.keyCode == 37 || el.keyCode == 38 || el.keyCode == 39 || el.keyCode == 40) {
// 	el.preventDefault();
// 	$('#instruction').hide(); }
// });


// $('body').keyup(function(el) {
// 	if ( el.keyCode == 32 ) {
// 	dieRoll();
// 	if (currRoll === 1) { $('#instruction').show().html('Use Arrow Keys to Move ' + currRoll + ' Space.'); }
// 	else { $('#instruction').show().html('Use Arrow Keys to Move ' + currRoll + ' Spaces.'); }
// 	}
// });


var dieRoll = function() {
	count = 0;
	currRoll = Math.floor((Math.random()*6)+1);
	if (currRoll == 1) { $('#die').html('<img src="images/die-1.jpg" />'); }
	else if (currRoll == 2) { $('#die').html('<img src="images/die-2.jpg" />'); }
	else if (currRoll == 3) { $('#die').html('<img src="images/die-3.jpg" />'); }
	else if (currRoll == 4) { $('#die').html('<img src="images/die-4.jpg" />'); }
	else if (currRoll == 5) { $('#die').html('<img src="images/die-5.jpg" />'); }
	else if (currRoll == 6) { $('#die').html('<img src="images/die-6.jpg" />'); }
};

//game board actions
function checkAction() {
	if (currRoll == count) {
		
	//HOSPITAL
	if ( player.col === 3 && player.row === 3 ) {
	if ( player.item1 === false) {
	$('#popUpContent').html("").append(" <br><br><p>You made it to the hospital, but Harden could barely speak. Shaken by the sight of his friend spontaneously combusting, he barely manages to slip you an mearly indecipherable note before visitng hours end.</p><br><br><h3>Acquired 1 Item: Harden's Letter</h3><br><br><p>If you can make it through Adam's Ale to the Town Center, maybe you'll have more luck</p><br><br><center><button id='cont'>CONTINUE</button></center> " );
	$('aside').toggle(true);
	player.item1 = true;
	if (player === p1) { $('#p1item1').addClass('acquired'); }
	else if (player === p2) { $('#p2item1').addClass('acquired'); }
	$('#cont').on('click', function() { $('aside').toggle(false); });
	}
	nextPlayer();
	}
	
	//FIRST QUESTION MARK	
	
		else if ( player.col === 6 && player.row === 7 ) { 
			if (player.item1 === false) { 
				$('#popUpContent').html("Have you visited Harden at the Hospital Yet? <br><br><br><br> <button id='cont'>Keep Playing</button> " ); $('#cont').on('click', function() { $('aside').toggle(false) }); }
			else { $('#popUpContent').html("You got a moment to rest and look at Harden's letter again... it definitely says:<br><br> <h3>SOMETHING</h3> <br><br><br><br> <button id='cont'>Keep Playing</button> "); $('#cont').on('click', function() { $('aside').toggle(false) }); player.clue1 = true; 
					if (player === p1) { $('#p1clue1').addClass('acquired') }
		 			else if (player === p2) { $('#p2clue1').addClass('acquired') }; 
		 		} 
			$('aside').toggle(true); 
			nextPlayer(); 
			}
	
	
	//SALOON	
	
	else if ( player.col === 10 && player.row == 7 ) { 
		if (player.item2 === false) {
		 $('#popUpContent').html("").append(" <br><br><p>You try to relax and get your mind off things, but everyone at the bar is gossiping about the new railline, Ben Rooster setting fire, his son now missing...?! Maybe someone at Town's Center can answer some questions. Better get a jug to go... </p><br><br><h3>Acquired 1 Item: A fifth of Whisky</h3><br><br><p>Onward to Town!</p><br><br><center><button id='cont'>CONTINUE</button></center> " );
		 $('aside').toggle(true);
		 player.item2 = true;
		 if (player === p1) { $('#p1item2').addClass('acquired') }
		 	else if (player === p2) { $('#p2item2').addClass('acquired') };
		 $('#cont').on('click', function() { $('aside').toggle(false) });
		 }
		 else { 
		 	 $('#popUpContent').html("").append(" <br><br><p>You better get out of here and on to Town's Center!</p><br><br><h3>Acquired 1 Item: Harden's Letter</h3><br><br><p>If you can make it through Adam's Ale to the Town Center, maybe you'll have more luck</p><br><br><center><button id='cont'>CONTINUE</button></center> " );
		 		$('aside').toggle(true);
			 player.item2 = true;
			 $('#cont').on('click', function() { $('aside').toggle(false) });
			};
		 nextPlayer();
		}
	
	
	//SECOND QUESTION MARK
	
		else if ( player.col == 9 && player.row == 4 ) {
		if (player.item1 === false) {
		$('#popUpContent').html("Have you visited Harden at the Hospital Yet? <br><br><br><br> <button id='cont'>Keep Playing</button> " );
		$('#cont').on('click', function() { $('aside').toggle(false); }); }
		else { $('#popUpContent').html("Glaring at the note on your long journey, you detected the first word of Harden's note: <br><br><h3>THERE'S</h3> <br><br><br><br> <button id='cont'>Keep Playing</button> " ); $('#cont').on('click', function() { $('aside').toggle(false); }); player.clue2 = true;
		if (player == p1) { $('#p1clue2').addClass('acquired'); }
		else if (player == p2) { $('#p2clue2').addClass('acquired'); } }
		$('aside').toggle(true);
		nextPlayer();
		}

	//THIRD QUESTION MARK
	
		else if ( player.col == 13 && player.row == 5 ) {
		if (player.item1 === false) {
		$('#popUpContent').html("Have you visited Harden at the Hospital Yet? <br><br><br><br> <button id='cont'>Keep Playing</button> " );
		$('#cont').on('click', function() { $('aside').toggle(false); }); }
		else { $('#popUpContent').html("After a few drinks at the bar, your blurred vision and dulled senses deciphered: <br><br> <h3>IN THE</h3> <br><br><br><br> <button id='cont'>Keep Playing</button> " ); $('#cont').on('click', function() { $('aside').toggle(false); }); player.clue3 = true;
		if (player == p1) { $('#p1clue3').addClass('acquired'); }
		else if (player == p2) { $('#p2clue3').addClass('acquired'); } }
		$('aside').toggle(true);
		nextPlayer();
		}

	//THE INN
	
	else if ( player.col == 13 && player.row == 0 ) { 
		if (player.item2 === false) {
		 $('#popUpContent').html("").append(" <br><br><p>You find the four company men at Inn when you arrive to town, They bribe you: If you bring them a fifth of whisky back from Adam's Ale, they'll tell you where Simon, Ben's son, is hiding.</p><br><br><br><br><p>Back to Adam's Ale Saloon!</p><br><br><center><button id='cont'>CONTINUE</button></center> " );
		 $('aside').toggle(true);
		 $('#cont').on('click', function() { $('aside').toggle(false) });
		 }
		 else { 
		 	 $('#popUpContent').html("").append(" <br><br><p>The four company men are in their usual spot, playing cards at the Inn. They know where Simon, Ben's son, is hiding and will give you the location if you give them your fifth of whisky!!</p><br><br><h3>Exchange 1 Item: Whisky for Henrietta's Address</h3><br><br><p>It's a long journey ahead, keep moving!</p><br><br><center><button id='cont'>CONTINUE</button></center> " );
		 	 $('aside').toggle(true);
			 player.item3 = true;
			 if (player == p1) { $('#p1item3').addClass('acquired') }
		 		else if (player == p2) { $('#p2item3').addClass('acquired') };
			 $('#cont').on('click', function() { $('aside').toggle(false) });
			};
		 nextPlayer();
		}

		//FOURTH QUESTION MARK
	
		else if ( player.col == 16 && player.row == 2 ) { 
			if (player.item1 === false) {
				$('#popUpContent').html("Have you visited Harden at the Hospital Yet? <br><br><br><br> <button id='cont'>Keep Playing</button> " ); 
				$('#cont').on('click', function() { $('aside').toggle(false) }); }
				else { $('#popUpContent').html("It came to you, as if in a dream. After a good nights rest at the Inn, you were able to make out the last word:<br><br> <h3>WATER</h3> <br><br><br><br> <button id='cont'>Keep Playing</button> " ); $('#cont').on('click', function() { $('aside').toggle(false) }); player.clue4 = true 
				if (player == p1) { $('#p1clue4').addClass('acquired') }
		 			else if (player == p2) { $('#p2clue4').addClass('acquired') } };
		$('aside').toggle(true); 
		nextPlayer(); 
		}

	//FIFTH QUESTION MARK
	
		else if ( player.col == 19 && player.row == 3 ) { 
			if (player.item1 === false) {
				$('#popUpContent').html("Have you visited Harden at the Hospital Yet? <br><br><br><br> <button id='cont'>Keep Playing</button> " ); 
				$('#cont').on('click', function() { $('aside').toggle(false) }); }
				else if ( player.clue4 === false) { $('#popUpContent').html("<br><br><p>What does that last word say!?</p><br><br><br><br> <button id='cont'>Keep Playing</button> " ); $('#cont').on('click', function() { $('aside').toggle(false) }); }
				else if ( player.clue3 === false) { $('#popUpContent').html("<br><br><p>What does Harden's note say!?</p><br><br><br><br> <button id='cont'>Keep Playing</button> " ); $('#cont').on('click', function() { $('aside').toggle(false) }); }
				else if ( player.clue2 === false) { $('#popUpContent').html("<br><br><p>What does Harden's note say!?</p><br><br><br><br> <button id='cont'>Keep Playing</button> " ); $('#cont').on('click', function() { $('aside').toggle(false) }); }
				else if ( player.clue1 === false) { $('#popUpContent').html("<br><br><p>What does Harden's note say!?</p><br><br><br><br> <button id='cont'>Keep Playing</button> " ); $('#cont').on('click', function() { $('aside').toggle(false) }); }
				else { $('#popUpContent').html("The rumors are true... Ben Rooser spontaneously combust, and the only thing Harden can say is: <br><br><h3>THERE'S SOMETHING IN THE WATER</h3><br><br><br><br> <button id='cont'>Keep Playing</button> " ); $('#cont').on('click', function() { $('aside').toggle(false) }); }
		$('aside').toggle(true); 
		nextPlayer(); 
		}

	//HENRIETTA'S HOUSE
	
	else if ( player.col == 22 && player.row == 6 ) { 
		if (player.item3 === false) {
		 $('#popUpContent').html("").append(" <br><br><p>Who's garden is this? You knock at the gate, but no one answers...</p><br><br><br><br><p>Back to Town's Center</p><br><br><center><button id='cont'>CONTINUE</button></center> " );
		 $('aside').toggle(true);
		 $('#cont').on('click', function() { $('aside').toggle(false) });
		 nextPlayer();
		 }
		 else if (player.item1 === true && player.item2 === true && player.item3 === true && player.clue1 === true && player.clue2 === true && player.clue3 === true && player.clue4 === true ) { 
		 	 $('#popUpContent').html("").append(" <br><br><p>Henrietta and Simon are in the garden when you arrive, and she invites you in. She asks pulls you aside ask asks: <br> What happened to Simon's father? <br><br> You give her Harden's note and whisoer a verbal translation:<br><br> There's something in the water <br><br> Henrietta lets you stay at her place for now. </p><br><br><h3>FOUND SIMON, MYSTERY SOLVED... in part. </h3><br><br><p>Explore more at:<br>www.rundownhillmusic.com</p><br><br><br><br>" );
		 	 $('aside').toggle(true);
			}
		else if (player.item1 === true && player.item2 === true && player.item3 === true ) { 
		 	 $('#popUpContent').html("").append(" <br><br><p>Henrietta and Simon are in the garden when you arrive, and she invites you in. She asks pulls you aside ask asks: <br> What happened to Simon's father? <br><br> You give her Harden's note but she can't read it either. She asks if you'll go back into town and find answers.</p><br><br><center><button id='cont'>CONTINUE</button></center> " );
			 $('aside').toggle(true);
			 $('#cont').on('click', function() { $('aside').toggle(false) });
			 nextPlayer();
			}	
		}
	else { nextPlayer(); }
	}
};



function nextPlayer() {
	if (currRoll == count) { 
		if (p1.p1only === true) { $('#instructions').html('Press Space Bar to Roll Die').show(); }
		else { p1.turn = !p1.turn; 
		$('#instruction').html('Next Player - Press Space Bar to Roll Die').show(); 
		whoseTurn(); }
		}
};

$('#play1player').on('click', function() {
	start1();
});

$('#play2player').on('click', function() {
	start2();
});



