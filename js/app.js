$(document).ready(function() {
	//add items by clicking on the cart button
	$('#item-submit').on('click', function(){
		var item = $('#area').val();
		var text ='<li class="active-itmes"><span>'+item+'</span> <i class="fa fa-check-square" aria-hidden="true"></i> <i class="fa fa-trash" aria-hidden="true"></i></li>'
		$('.items-list').append(text);
	});
});