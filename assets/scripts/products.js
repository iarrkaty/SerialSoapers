
$(document).ready(function() {
  'use strict';

var products = {};


products.populateFilters = function() {
  $('product').each(function() {
    if (!$(this).hasClass('template')) {
      var val = $(this).find('')
    }
  });
};

products.search = function() {
    let template = $('#results-template').html();
    let resultDiv = $('#results');
    $('form').on('submit', (evt) => {
      // prevents form from submitting in browser
      evt.preventDefault();

      const urlBase = $(location).attr('href');
      const formData = $('form').serializeArray();

      $.ajax({
        type:'POST',
        url: urlBase,
        data: formData
      })
      .done(response => {
        // TODO Add in view update logic
        console.log('AJAX response', response)
        let html = Handlebars.compile(template)(response.data);
        resultDiv.html(html);
      })
      .fail(error => console.log('AJAX error', error));
    });
};

products.search();
});
