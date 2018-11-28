$('.dh').click(function(event) {
	$('.dh_box').toggle();
});
$(".dh_box div").click(function(event) {
	$(".dh_box div").removeClass('dh_inner1');
	$(this).addClass('dh_inner1')
});
$(".cpS").click(function(event) {
	$(".cpS").removeClass('cpS1');
	$(this).addClass('cpS1')
});