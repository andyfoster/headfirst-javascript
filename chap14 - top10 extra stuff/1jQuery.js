$(function() {
  $("#buynow").click(function() {
    alert("I want to buy now!");
  });
});



$(function() {
  $("a").click(function() {
    alert("I want to buy now!");
  });
});


$(function() {
  $("#playlist > li").addClass("favorite");
});




$(function() {
  $("#specialoffer").click(function(){
    $(this).fadeOut(800, function(){
      $(this).fadeIn(400);
    });
  });
});
