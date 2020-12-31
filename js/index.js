
/*!
  * Start Bootstrap - Grayscale v6.0.3 (https://startbootstrap.com/theme/grayscale)
  * Copyright 2013-2020 Start Bootstrap
  * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
  */

 $(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});


var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 150,
    slidesPerGroup: 1,
    centeredSlides: true,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});
