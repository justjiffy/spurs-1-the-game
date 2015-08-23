//global variables(?)... I couldn't call these in inspector when they were inside the $(function() {}); tags

var array = [1,2,3,4];

var boardArray = [["X", "X", "X", "Start", "", "", "", "X", "X", "X"], //row 1
			  [ "X", "X", "X", "", "X", "X", "", "X", "X", "X" ], //row 2	
			  [ "X", "X", "X", "", "X", "X", "", "X", "X", "X" ], //row 3
			  ["X", "X", "X", "Hospital", "", "", "", "X", "X", "X"]];


//game code
$(function() {



console.log(boardArray);

$('#showL2').on('click', function() { $('#level2').show(); });
$('#showL3').on('click', function() { $('#level3').show(); });
$('#showL4').on('click', function() { $('#level4').show(); });
$('#reset').on('click', function() { $( "#level2, #level3, #level4" ).hide(); });

$('html').on('keydown', function(el) {
		if(el.keyCode == 32) {
			el.preventDefault();
		}
});

$('body').keyup(function(el) {
	if(el.keyCode == 32) {
		console.log(dieRoll()) 
	}
});

var dieRoll = function() {
	$('#die').html((Math.floor((Math.random()*6)+1)))
};

$('aside').draggable();
$('aside').resizable();
  });
