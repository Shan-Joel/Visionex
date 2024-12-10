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

$(document).ready(function () {
   $('.hamburger-menu').on('click', function () {
      $(this).toggleClass('active');
      $('.header__menu').toggleClass('active');
   });

   // Close menu when clicking outside
   $(document).on('click', function (event) {
      if (!$(event.target).closest('.header__menu, .hamburger-menu').length) {
         $('.hamburger-menu').removeClass('active');
         $('.header__menu').removeClass('active');
      }
   });
});
