$(document).ready(function() {
  $(".tour").on("mouseenter", function() {
    $(this).addClass("highlight");
    $(this).find(".per-night").animate({"top": "-14px","opacity": "1"}, "fast");
  });
  $(".tour").on("mouseleave", function() {
    $(this).find(".per-night").animate({"top": "0px","opacity": "0"}, "fast");
    $(this).removeClass("highlight");
  });
  
    $('button').on('click', function(){
    var tour = $(this).parent();
    var location = tour.data('location');
    var resultDiv = tour.find('.results').empty();
    Vacation.getPrice(location).done(function(priceResult){
      $('<p>$'+priceResult+'</p>').appendTo(resultDiv);
    });

    Photo.getPhoto(location).done(function(photoResult){
      $('<img />').attr('src', photoResult).appendTo(resultDiv);
    });
  });
  
  
});
