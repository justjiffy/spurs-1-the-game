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