(function ($) {
  "use strict";

  // menu
  $(".hamburger-menu ,.navClose").click(function () {
    $(".navMobile_content").toggleClass("active");
  });

  // owlCarousel
  $(".carousel_wrapper").owlCarousel({
    loop: true,
    dots: true,
    margin: 25,
    responsiveClass: true,
    center: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
        loop: true,
      },
    },
  });
})(jQuery);
