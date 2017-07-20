// JavaScript Document
$(document).ready(function(){
	$('.middlesection-div').click(function(){
		$(this).animate({left:'-22vh'},1000);
		})
	$('footer input').click(function(){
		$('.middlesection-div').animate({left:'0'},1000);
		})
})