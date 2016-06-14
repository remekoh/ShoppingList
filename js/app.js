$(document).ready(function() {
	//add items with enter button
	$(document).keyup(function(event){
		if(event.keyCode == 13){
    	var item = $('.add-items').val();
    	if (item !== "") {
				var text ='<li class="active-items"><span>'+item+'</span> <i class="fa fa-check-square" aria-hidden="true"></i> <i class="fa fa-trash" aria-hidden="true"></i></li>'
				$('.items-list').append(text);
				$('.add-items').val('');
			}
    }
	});

	// add items by clicking on the cart button
	$('#item-submit').on('click', function(){
		var item = $('.add-items').val();
		if (item !== "") {
			var text ='<li class="active-items"><span>'+item+'</span> <i class="fa fa-check-square" aria-hidden="true"></i> <i class="fa fa-trash" aria-hidden="true"></i></li>'
			$('.items-list').append(text);
			$('.add-items').val('');
		}
	});

	// checking off bought items
 	$('.items-list').on('click', '.fa-check-square', function(){
 		if ($(this).parent().hasClass(".active")) {
 			$(this).closest('.items').toggleClass('active inactive');
 		} else {
 			$(this).closest('.items').toggleClass('inactive active');
 		}
 	});

 // 	$('.items-list').on('click', '.fa-check-square', function(){
	// $(this).closest('.active-items').toggleClass('active-items inactive-items');
 // 	});

 // $('.items-list').on('click', '.fa-check-square', function() {
 // 	$(this).closest('li.items').removeClass('active');
 // 	$(this).closest('li.items').addClass('inactive');
 // });

 	// removes items by clicking the trash icon
 	$('.items-list').on('click', '.fa-trash', function () {
 		$(this).closest('li').remove();
 	});
});