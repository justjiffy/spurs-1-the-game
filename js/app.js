$(function() {	
	
boardArray = [["X", "X", "X", "S", "Z", "", "", "X", "X", "X"], //row 1  (s = start)
			  [ "X", "X", "X", "", "X", "X", "", "X", "X", "X" ], //row 2	
			  [ "X", "X", "X", "", "X", "X", "", "X", "X", "X" ], //row 3
			  ["X", "X", "X", "H", "", "", "", "X", "X", "X"], //row 4      (h = hospital)
			  ["X", "X", "X", "X", "X", "X", "", "X", "X", "X"], //row 5
			  ["X", "X", "X", "X", "X", "X", "", "X", "X", "X"], //row 6
			  ["X", "X", "X", "X", "", "", "", "", "X", "X"], //row 7
			  ["X", "X", "X", "X", "", "X", "X", "", "X", "X"], //row 8
			  ["X", "X", "X", "X", "", "X", "X", "", "X", "X"], //row 9
			  ["X", "X", "X", "X", "", "X", "X", "", "X", "X"], //row 10
			  ["X", "X", "X", "X", "", "", "", "", "X", "X"], //row 11
			  ["X", "X", "X", "X", "X", "X", "", "X", "X", "X"], //row 12
			  ["X", "X", "X", "X", "X", "X", "", "X", "X", "X"], //row 13
			  ["", "", "", "", "", "", "", "X", "X", "X"], //row 14
			  ["", "X", "X", "", "X", "X", "X", "X", "X", "X"], //row 15
			  ["", "X", "X", "", "X", "X", "X", "X", "X", "X"], //row 16
			  ["", "", "", "", "X", "X", "X", "X", "X", "X"], //row 17
			  ["X", "X", "X", "", "X", "X", "X", "X", "X", "X"], //row 18
			  ["X", "X", "X", "", "X", "X", "X", "X", "X", "X"], //row 19
			  ["X", "X", "X", "", "", "", "", "X", "X", "X"], //row 20
			  [ "X", "X", "X", "", "X", "X", "", "X", "X", "X"], //row 21
			  [ "X", "X", "X", "", "X", "X", "", "X", "X", "X"], //row 22
			  [ "X", "X", "X", "", "", "", "F", "X", "X", "X"]]; //row 23   (f = finish);

	
	var makeMove = function(id, row, index) { 
			$(id).children()[index].innerHTML = "<img src='images/p1-sherrif.png' />";
	};

	$('html').on('keyup', function(el) {
	if (el.keyCode == 39) {
		makeMove('#level1', 0, 3); }
	});

$('#showL2').on('click', function() { $('#level2').show(); });
$('#showL3').on('click', function() { $('#level3').show(); });
$('#showL4').on('click', function() { $('#level4').show(); });
$('#reset').on('click', function() { $( "#level2, #level3, #level4" ).hide(); });

$('html').on('keydown', function(el) {
		if(el.keyCode == 32 ||
		   el.keyCode == 37 ||
		   el.keyCode == 38 ||
		   el.keyCode == 39 ||
		   el.keyCode == 40
		   ) {
			el.preventDefault();
		}
});

$('body').keyup(function(el) {
	if(el.keyCode == 32) {
		return dieRoll(); 
	}
});

var dieRoll = function() {
	$('#die').html((Math.floor((Math.random()*6)+1)))
};

$('aside').draggable(); 
$('aside').resizable(); //can't be draggable and resizable?? 
  });
