$(document).ready(function() {
	//add items with enter button
	$(document).keyup(function(event){
		if(event.keyCode == 13){
    		var item = $('.add-items').val();
			var text ='<li class="active-items"><span>'+item+'</span> <i class="fa fa-check-square" aria-hidden="true"></i> <i class="fa fa-trash" aria-hidden="true"></i></li>'
			$('.items-list').append(text);
			$('.add-items').val('');
    }
	});

	// add items by clicking on the cart button
	$('#item-submit').on('click', function(){
		var item = $('.add-items').val();
		var text ='<li class="active-items"><span>'+item+'</span> <i class="fa fa-check-square" aria-hidden="true"></i> <i class="fa fa-trash" aria-hidden="true"></i></li>'
		$('.items-list').append(text);
		$('.add-items').val('');
	});

	// checking off bought items
 	$('.items-list').on('click', '.fa-check-square', function(){
 		$(this).closest('.active-items').css('color', 'lightgray').toggleClass('active-items inactive-items');
 	});

 	// $('.inactive-items').mouseenter(function() {
 	// 	$('inactive-items').closest('.fa-trash').css('color', 'black');
 	// })

 	// removes items by clicking the trash icon
 	$('.items-list').on('click', '.fa-trash', function () {
 		$(this).closest('li').remove();
 	});
});