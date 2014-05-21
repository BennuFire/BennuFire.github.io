$(document).ready(function() {
  $(".tour").on("mouseenter", function() {
    $(this).addClass("highlight");
    $(this).find(".per-night").animate({"top": "-14px","opacity": "1"}, "fast");
  });
  $(".tour").on("mouseleave", function() {
    $(this).find(".per-night").animate({"top": "0px","opacity": "0"}, "fast");
    $(this).removeClass("highlight");
  });
  
});
