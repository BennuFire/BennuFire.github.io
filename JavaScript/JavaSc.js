$(document).ready(function() {
  $(".tour").on("mouseenter", function() {
	alert("wee");
    $(this).addClass("highlight");
    $(this).find(".per-night").animate({"top": "-14px","opacity": "1"}, "fast");
  });
  $(".tour").on("mouseleave", function() {
    $(this).find(".per-night").animate({"top": "0px","opacity": "0"}, "fast");
    $(this).removeClass("highlight");
  });
  
   $("#ally").on("mouseenter", function() {
	alert("wee");
  });
});
