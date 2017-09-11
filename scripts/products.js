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
    $('#form').on('submit', (evt) => {

        $.getJSON('scripts/soaps.json').done((results) => {
            let html = Handlebars.compile(template)(results);
            resultDiv.html(html);
        })
        .fail((err) => {
            console.log('Error fetching results:', error);
        });
        evt.preventDefault();
    });
};

products.search();
