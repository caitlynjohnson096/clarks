
$('#forward-button').click(function(){
  nextSlide();
});

$('#back-button').click(function(){
  prevSlide();
});

   const DOTS = $('.dots');
   const SLIDES = $(".slides > .slide");





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
     let currentDot = DOTS.eq(index);



     SLIDES.addClass("hidden");
     currentSlide.removeClass("hidden");
     //
     DOTS.removeClass('dotChange');
     currentDot.addClass("dotChange");





     /* TODO: snippets to hide SLIDES and then show currentSlide */
   }
   $('#dot1').click(function(){
     showSlide(1);
   });
   $('#dot2').click(function(){
     showSlide(2);
   });
   $('#dot3').click(function(){
     showSlide(3);
   });
   $('#dot4').click(function(){
     showSlide(4);
   });
