$(function() { //handle form submission
  
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault(); //stop default submit behavior
    const newItem = $(event.currentTarget).find('[name="shopping-list-entry"]').val(); //get value of input field as `newItem`
    $('[name="shopping-list-entry"]').val(''); //clear input form
    
    //add the newItem card to the list
    $('.shopping-list').append(`
    <li>
      <span class="shopping-item">${newItem}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`);

  });

});

$(function() {  //toggle strikethrough text on item card
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    const checkedItem = $(this).parents('li').find('.shopping-item'); //search the parents until an 'li' is found, then search that 'li' until a '.shopping-item' is found
    checkedItem.toggleClass('shopping-item__checked');
  })

  /* bad event delegation; cards added after page load were not affected
  $('.shopping-item-toggle').click(event => {
  });*/

})

$(function() { //handle item deletion
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) { //stole selector from above
    const deletedItem = $(this).parents('li'); //essentially stole this one too
    deletedItem.remove(); 
  })
});