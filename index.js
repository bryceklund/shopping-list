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
  $('.shopping-item-toggle').click(event => {
    const checkedItem = $('span').find('.shopping-item');
    console.log(checkedItem);
    checkedItem.toggleClass('.shopping-item__checked');
  });
})