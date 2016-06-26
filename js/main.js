$(document).ready(function () {
	$('.form-control').prop('disabled', true);

	$('select').hover(function(){
			console.log('hola');
	});

	$('.form-group').hover(function(){
		var isDisabled = $('.form-control').prop('disabled');		
		$(this).find('button.edit').toggle(isDisabled);

		if($('button.save').is(':visible')) {
			$('button.edit').hide();
		}
		
	}, function() {
		$(this).find('button.edit').hide();
  	});


    $('.edit').click( function () {
    	var $parent = $(this).parent('.form-group');
    	var $input = $parent.find('.form-control');
		$input.prop('disabled', false);
		$parent.find('button.edit').hide();
		$parent.find('button.save').show();
		$input.focus();		
	});

	$('.save').click( function () {
		var $parent = $(this).parent('.form-group');
    	var $input = $parent.find('.form-control');
		$input.prop('disabled', true);
		$parent.find('button.save').hide();
		$parent.find('button.edit').show();
	});

});