// JavaScript Document

$(document).ready(function() {
	
	//do as page loads
	$('.faq_info').hide();
	
	
	$('#faq_show').click(function (){
		$('.faq_info').show();
	});	
	$('#faq_hide').click(function (){
		$('.faq_info').hide();
	});
		
	$('.faq_link').click(function (){
		var sect = $(this).attr('id');
		$('#'+sect+"i").toggle();	
	});
	
});