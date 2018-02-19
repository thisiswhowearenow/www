$(document).ready(function() {
  var $form = $('form#test-form'),
      url = 'https://script.google.com/macros/s/AKfycbxdEkRd_gsOIvGIYUUFtizY1eLk_myIAurrHZYJTs500xOuajM/exec'

  $('#submit-form').on('click', function(e) {
    e.preventDefault();
    var jqxhr = $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: $form.serializeObject()
    }).success(
      // do something
    );
  })
});

// https://script.google.com/macros/u/0/s/AKfycbxdEkRd_gsOIvGIYUUFtizY1eLk_myIAurrHZYJTs500xOuajM/exec
