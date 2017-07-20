// JavaScript Document
$(document).ready(function(){
	$('section .thirhdiv #firstjqp').click(function(){
		$(this).css('transform','rotate(270deg)');
		$('.newsul').slideToggle();
		})
	/*$('section .thirhdiv #secondjqp').click(function(){
		$(this).css('transform','rotate(270deg)');
		$('.newsul').slideDown();
		})*/
	$('#secondjqp').click(function(){
		$(this).css('transform','rotate(270deg)');
		$('.newsbox').slideToggle();
		})
	$('button').click(function(){
		$('#firstjqp,#secondjqp').css('transform','rotate(270deg)');
		$('.newsul,.newsbox').slideToggle();
	  })
	$('.sectionul li').first().click(function(){
		$(this).css({'background':'#c06','color':'white'});
		$('.sectionul li').eq(1).css({'background':'white','color':'#666'});
		$('.sectionul li').last().css({'background':'white','color':'#666'});
		})
	$('.sectionul li').eq(1).click(function(){
		$(this).css({'background':'#c06','color':'white'});
		$('.sectionul li').eq(0).css({'background':'white','color':'#666'});
		$('.sectionul li').last().css({'background':'white','color':'#666'});
		})
	$('.sectionul li').last().click(function(){
		$(this).css({'background':'#c06','color':'white'});
		$('.sectionul li').eq(1).css({'background':'white','color':'#666'});
		$('.sectionul li').first().css({'background':'white','color':'#666'});
		})
	})