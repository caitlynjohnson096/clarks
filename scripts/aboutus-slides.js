const SLIDES = $(".slide");
const DOTS = $(".aboutdots");

function nextSlide() {
  let nextNum = SLIDES.index($(".slide:not(.hidden)")) + 1 + 1; /* +1 for 0-index array */
  if (nextNum > SLIDES.length) {
    nextNum = 1;
  }
  showSlide(nextNum);
}

function prevSlide() {
  let prevNum = SLIDES.index($(".slide:not(.hidden)")) - 1 + 1; /* +1 for 0-index array */
  if (prevNum <= 0) {
    prevNum = SLIDES.length;
  }
  showSlide(prevNum);
}

function showSlide(num) {
  let index = num - 1;
  let currentSlide = SLIDES.eq(index);

  /* TODO: snippets to hide SLIDES and then show currentSlide */
  for (i = 0; i < SLIDES.length; i++){
    $(SLIDES[i]).addClass("hidden");
    $(DOTS[i]).removeClass("dotChange");
  }
  $(SLIDES[index]).removeClass("hidden");
  $(DOTS[index]).addClass("dotChange");

}



$("#leftaboutbutton").click(function() {
  prevSlide();
});

$("#rightaboutbutton").click(function() {
  nextSlide();
});
//dots


//dotsgroup
$(".aboutdots").click(function(){
  for (i = 0; i < SLIDES.length; i++){
    $(SLIDES[i]).addClass("hidden");
    $(DOTS[i]).removeClass("dotChange");
  }
});

$("#aboutdot1").click(function() {
  $(SLIDES[0]).removeClass("hidden");
  $(DOTS[0]).addClass("dotChange");
});

$("#aboutdot2").click(function() {
  $(SLIDES[1]).removeClass("hidden");
  $(DOTS[1]).addClass("dotChange");
});

$("#aboutdot3").click(function() {
  $(SLIDES[2]).removeClass("hidden");
  $(DOTS[2]).addClass("dotChange");
});

$("#aboutdot4").click(function() {
  $(SLIDES[3]).removeClass("hidden");
  $(DOTS[3]).addClass("dotChange");
});
