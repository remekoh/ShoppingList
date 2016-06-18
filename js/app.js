/* Shopping List app re-factored to optimize with shorter code
and simplified ways of approaching issues. No functions were
needed because all code was only used once. Also added a message
when the list is empty. the Airbnb javascript style guide was
used as much as possible for the code.

-- All removed code will be commented on the bottom
-- with an explanation of why it was removed

 */

/*------------------ MAIN CODE BODY ------------------*/

$(document).ready(function () {

  /*--- Adds items to the list ---*/

  // targets the shopping cart icon on click or enter
  $('#item-submit').on('click', function () {
    event.preventDefault();

    // grabs the text value of the input field
    var item = $('.add-items').val();

    // makes sure its not an empty input field
    if (item !== '') {
      // removes the 'no items' message
      $('.no-items').text('');

      // appends the item entered to the list of items
      $('.items-list').append('<li class="items"><span>' +
        item + '</span> <i class="fa fa-square-o" aria-hidden' +
        '="true"></i> <i class="fa fa-trash" aria-hidden="true">' +
        '</i></li>');

      // resets the input field
      $('.add-items').val('');
    }
  });

  /*--- Marks items as checked or not ---*/

  // targets the i elements in the list
  $('.items-list').on('click', 'i', function () {

    // determines if checked or unchecked
    if ($(this).hasClass('fa-square-o')) {
      // adds the checked class to the li element
      $(this).parent().addClass('checked');

      // switches from unchecked to checked
      $(this).toggleClass('fa-square-o fa-check-square');
    } else {
      // removes the checked class to the li element
      $(this).parent().removeClass('checked');

      // switches from checked to unchecked
      $(this).toggleClass('fa-check-square fa-square-o');
    }
  })

  /*--- Removes items from the list ---*/

  // targets the trash can icon
  $('.items-list').on('click', '.fa-trash', function () {
    // targets the li element and removes it
    $(this).parent().remove();

    // checks if the list of items is empty
    if ($('.items-list li').length === 0) {
      // displays message that list is empty
      $('.no-items').text('No items listed.');
    }
  });
});


/*------------------ REMOVED CODE ------------------*/

/*--- I wrapped the input elements in a form element which
//--- automatically accounts for the enter key

$('.add-items').keyup(function (event) {
  event.preventDefault();
  if (event.keyCode == 13) {
    var item = $('.add-items').val();
    if (item !== '') {
      $('.items-list').append('<li class="active items"><span>' +
        item + '</span> <i class="fa fa-square-o" aria-hidden' +
        '="true"></i> <i class="fa fa-trash" aria-hidden="true">' +
        '</i></li>');
      $('.add-items').val('');
    }
  }
});

//--- consolidated code with an if statement

  $('.items-list').on('click', '.fa-square-o', function () {
    $(this).closest('.items').addClass('checked');
    $(this).toggleClass('fa-square-o fa-check-square');
  });

  $('.items-list').on('click', '.fa-check-square', function () {
    $(this).closest('.items').removeClass('checked');
    $(this).toggleClass('fa-check-square fa-square-o');
  });

//--- changed all .closet(''); to .parent();
//--- for example:
//------ $(this).closest('.items').addClass('checked');
//------ is now
//------ $(this).parent().addClass('checked');

*/
