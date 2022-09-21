

$("#nav-button").click(function() {
if ($("#navigation-m").hasClass("hidden")) {
$("#navigation-m").removeClass("hidden"); } else {
$("#navigation-m").addClass("hidden"); }
});



$(window).resize(function() {
  if ($(window).width() < 700) {
  $("#nav-button").removeClass('hidden');
  $("#navigation-m").addClass('hidden')
  } else {
    $("#nav-button").addClass('hidden');
    $("#navigation-m").removeClass('hidden')
  }
});

if ($(window).width() > 700) {
  $("#nav-button").addClass('hidden');
  $("#navigation-m").removeClass('hidden')
};
