$('.part-block a').hover(
function(){
	 $(this).parent().css("background","none");
});
$('.part-block').mouseout(
function(){
	 $('.part-block').css("background","url(images/shadow-part.png) center bottom no-repeat");
});

$('.block1-block a').hover(
function(){
	 $(this).parent().css("background","none");
});
$('.block1-block').mouseout(
function(){
	 $('.block1-block').css("background","url(images/shadow-part.png) center bottom no-repeat");
});

$('.bonus-block a').hover(
function(){
	 $(this).parent().css("background","none");
});
$('.bonus-block').mouseout(
function(){
	 $('.bonus-block').css("background","url(images/shadow-part.png) center bottom no-repeat");
});