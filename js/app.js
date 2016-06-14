$(document).ready(function() {
	//add items with enter button
	$(document).keyup(function(event){
		if(event.keyCode == 13){
    	var item = $('.add-items').val();
    	if (item !== "") {
				var text ='<li class="active items"><span>'+item+'</span> <i class="fa fa-square-o" aria-hidden="true"></i> <i class="fa fa-trash" aria-hidden="true"></i></li>'
				$('.items-list').append(text);
				$('.add-items').val('');
			}
    }
	});

	// add items by clicking on the cart button
	$('#item-submit').on('click', function(){
		var item = $('.add-items').val();
		if (item !== "") {
			var text ='<li class="active items"><span>'+item+'</span> <i class="fa fa-square-o" aria-hidden="true"></i> <i class="fa fa-trash" aria-hidden="true"></i></li>'
			$('.items-list').append(text);
			$('.add-items').val('');
		}
	});

	// checking off bought items - changes classes from active to inactive
	// changes empty box to checked box
 	$('.items-list').on('click', '.fa-square-o', function() {
 			$(this).closest('.items').toggleClass('active inactive');
 			$(this).toggleClass('fa-square-o fa-check-square');
 	});

	// changes classes from inactive to active
	// changes checked box to unchecked box
 	$('.items-list').on('click', '.fa-check-square', function() {
 			$(this).closest('.items').toggleClass('inactive active');
 			$(this).toggleClass('fa-check-square fa-square-o');
 	});

 	// removes items by clicking the trash icon
 	$('.items-list').on('click', '.fa-trash', function () {
 		$(this).closest('li').remove();
 	});
});