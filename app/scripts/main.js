$('.screenshot').hover(function(){
	$(this).children('.caption').toggle('slow');
});


$('.screenshot').click(function() {
		console.log ('this worked');

	$('.popupbox').toggle('slow');
	$('.transsheet').toggle('slow');
});

$('.popupboxclose').click(function(){
		console.log ('this worked');

	$('.popupbox').toggle('slow');
	$('.transsheet').toggle('slow');
});