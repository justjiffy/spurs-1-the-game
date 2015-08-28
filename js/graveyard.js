function checkAction() {
	p2.imgStored = false;
	p1.imgStored = false;
	if (currRoll == count) {
		//HOSPITAL
		if ( player.col == 3 && player.row == 3 ) { 
			if (player.item1 === false) {
			 $('#popUpContent').html("").append(" <br><br><p>You made it to the hospital, but Harden could barely speak. Shaken by the sight of his friend spontaneously combusting, he barely manages to slip you an almost indecipherable note before visitng hours end.</p><br><br><h3>Acquired 1 Item: Harden's Letter</h3><br><br><p>If you can make it through Adam's Ale to the Town Center, maybe you'll have more luck</p><br><br><center><button id='cont'>CONTINUE</button></center> " );
			 $('aside').toggle(true);
			 player.item1 = true;
			 $('#cont').on('click', function() { $('aside').toggle(false) });
			 };
			 nextPlayer();
			}	
		
		//FIRST QUESTION MARK	
		
			else if ( player.col == 6 && player.row == 7 ) { 
				if (player.item1 === false) { 
					$('#popUpContent').html("Have you visited Harden at the Hospital Yet? <br><br><br><br> <button id='cont'>Keep Playing</button> " ); $('#cont').on('click', function() { $('aside').toggle(false) }); }
					else { $('#popUpContent').html("You got a moment to rest and look at Harden's letter again... it definitely says: SOMETHING <br><br><br><br> <button id='cont'>Keep Playing</button> "); $('#cont').on('click', function() { $('aside').toggle(false) }); } 
				$('aside').toggle(true); 
				nextPlayer(); 
				}
		
		
		//SALOON	
		
		else if ( player.col == 10 && player.row == 7 ) { $('#popUpContent').html("You stop by the bar to have a drink after another long, hot day. The locals are all gossiping about the new rail line coming to town, Ben Rooster spontaneously combusting, his son being kidnapped...? <br><br>What's going on!? <br><br><br><br> <button id='cont'>Keep Playing</button> " ); $('#cont').on('click', function() { $('aside').toggle(false) }); player.item2 = true }
		
		//SECOND QUESTION MARK
		
			else if ( player.col == 9 && player.row == 4 ) { 
				if (player.item1 === false) {
					$('#popUpContent').html("Have you visited Harden at the Hospital Yet? <br><br><br><br> <button id='cont'>Keep Playing</button> " ); $('#cont').on('click', function() { $('aside').toggle(false) }); }
					else { $('#popUpContent').html("After a few drink at the bar, your blurred vision and dulled senses detected the first word of Harden's note: THERE'S" ); }
			$('aside').toggle(true); 
			nextPlayer(); 
			}

		//THIRD QUESTION MARK
		
			else if ( player.col == 13 && player.row == 5 ) { 
				if (player.item1 === false) {
					$('#popUpContent').html("Have you visited Harden at the Hospital Yet? <br><br><br><br> <button id='cont'>Keep Playing</button> " ); $('#cont').on('click', function() { $('aside').toggle(false) }); }
					else { $('#popUpContent').html("After a few drink at the bar, your blurred vision and dulled senses can seemingly translate Harden's gibberish. The first word of the note is: THERE'S" ); }
			$('aside').toggle(true); 
			nextPlayer(); 
			}			
		//THE INN
		
		
	} //closing for if currRole = count
	else { nextPlayer(); }
}; //closing for function
			







			// function checkSquareR() {
			// 	var whatIf = parseInt(player.row) + 1 ;
			// 	var arrayToChild = parseInt(player.col.toString() + whatIf.toString());
			// 	if ( $('#board').children()[arrayToChild].innerHTML.indexOf('orin') != -1) { p2.imgStored = true } 
			// 	else if ( $('#board').children()[arrayToChild].innerHTML.indexOf('sherrif' != -1) ) { p1.imgStored = true }
			// }; 	

			// function replaceSquareR() {
			// 	var whatIf = parseInt(player.row) - 1 ;
			// 	var arrayToChild = parseInt(player.col.toString() + whatIf.toString());
			// 	if (p2.imgStored === true) { $('#board').children()[arrayToChild].innerHTML = p2.img; }
			// 	else if (p1.imgStored === true) { $('#board').children()[arrayToChild].innerHTML = p2.img; }
			// };

			// function checkSquareL() {
			// 	var whatIf = parseInt(player.row) - 1;
			// 	var arrayToChild = parseInt(player.col.toString() + whatIf.toString());
			// 	if ( $('#board').children()[arrayToChild].innerHTML.indexOf('orin') != -1) { p2.imgStored = true } 
			// 	else if ( $('#board').children()[arrayToChild].innerHTML.indexOf('sherrif' != -1) ) { p1.imgStored = true }
			// }; 	

			// function replaceSquareL() {
			// 	var whatIf = parseInt(player.row) + 1 ;
			// 	var arrayToChild = parseInt(player.col.toString() + whatIf.toString());
			// 	if (p2.imgStored === true) { $('#board').children()[arrayToChild].innerHTML = p2.img; }
			// 	else if (p1.imgStored === true) { $('#board').children()[arrayToChild].innerHTML = p2.img; }
			// };

			// function checkSquareU() {
			// 	var whatIf = parseInt(player.col) + 1;
			// 	var arrayToChild = parseInt(player.col.toString() + whatIf.toString());
			// 	if ( $('#board').children()[arrayToChild].innerHTML.indexOf('orin') != -1) { p2.imgStored = true } 
			// 	else if ( $('#board').children()[arrayToChild].innerHTML.indexOf('sherrif' != -1) ) { p1.imgStored = true }
			// };

			// function replaceSquareU() {
			// 	var whatIf = parseInt(player.col) - 1 ;
			// 	var arrayToChild = parseInt(player.col.toString() + whatIf.toString());
			// 	if (p2.imgStored === true) { $('#board').children()[arrayToChild].innerHTML = p2.img; }
			// 	else if (p1.imgStored === true) { $('#board').children()[arrayToChild].innerHTML = p2.img; }
			// };

			// function checkSquareD() {
			// 	var whatIf = parseInt(player.col) -1;
			// 	var arrayToChild = parseInt(player.col.toString() + whatIf.toString());
			// 	if ( $('#board').children()[arrayToChild].innerHTML.indexOf('orin') != -1) { p2.imgStored = true } 
			// 	else if ( $('#board').children()[arrayToChild].innerHTML.indexOf('sherrif' != -1) ) { p1.imgStored = true }
			// };

			// function replaceSquareD() {
			// 	var whatIf = parseInt(player.col) + 1 ;
			// 	var arrayToChild = parseInt(player.col.toString() + whatIf.toString());
			// 	if (p2.imgStored === true) { $('#board').children()[arrayToChild].innerHTML = p2.img; }
			// 	else if (p1.imgStored === true) { $('#board').children()[arrayToChild].innerHTML = p1.img; }
			// };