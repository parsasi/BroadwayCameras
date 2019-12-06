$(document).ready(function(){
    $('.slick-slider').slick({
      autoplay: true,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      adaptiveHeight: true,
      nextArrow : '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
      prevArrow : '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',

    });
    $('.new-models-carousel').slick({
      autoplay: true,
      infinite: true,
      speed: 200,
      slidesToShow: 3,
      nextArrow : '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
      prevArrow : '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    });
  });