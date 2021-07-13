$('.part-block a').hover(
function(){
	 $(this).parent().css("background","none");
});
$('.part-block').mouseout(
function(){
	 $('.part-block').css("background","url(videokurs/images/shadow-part.png) center bottom no-repeat");
});