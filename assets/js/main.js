$(document).ready(function () {
   $('.landscape__item').first().addClass('active');

   $('.landscape__item').hover(
      function () {
         $('.landscape__item').first().removeClass('active');

         $(this).addClass('active');
      },
      function () {
         $(this).removeClass('active');

         if (!$('.landscape__item').hasClass('active')) {
            $('.landscape__item').first().addClass('active');
         }
      }
   );
});
