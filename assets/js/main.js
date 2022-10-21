//Active Class
$(document).ready(function(){
	$('.nav-item a').click(function(){
		$('.nav-item a').removeClass("active");
		$(this).addClass("active");
	});
  // Nav menu visible
  // $(window).resize(function(){
  //   if($(window).width() <= 767){
  //     $('.nav-toggle-btn').click(function(){
  //       $(this).closest('.nav-items-wrapper').toggleClass('menu-visible');
  //     });
  //   }
  // });
  // if($(window).width() <= 767){
  //   $('.nav-toggle-btn').click(function(){
  //     $(this).closest('.nav-items-wrapper').toggleClass('menu-visible');
  //   });
  // }
  $('.nav-toggle-btn').click(function(){
    $(this).closest('.nav-items-wrapper').toggleClass('menu-visible');
  });
});

//Company slider
$('.brand-slider-wrapper').slick({
  dots: false,
  arrows: false,
  infinite: true,
  draggable: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 500,
  cssEase: 'linear',
  slidesToShow: 6,
  slidesToScroll: 1,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
     {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//Testimonial Slider

$(document).ready(function(e) {
     
  var sliderfor = $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots:false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  
  var slidernav = $('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    arrows: false,
    appendDots:$(".custom-slick-dots")
  });
  
  $('.custom-slick-arrow-left').on('click', function () {    
    $('.slider-for').slick('slickPrev');
    $('.slider-nav').slick('slickPrev');
  });
  $('.custom-slick-arrow-right').on('click', function () {
    $('.slider-for').slick('slickNext');
    $('.slider-nav').slick('slickNext');
  });
});

// fixed header
$(window).scroll(function(){
  var scrollTop =$(window).scrollTop();
  if(scrollTop >=100){
    $('body').addClass('fixed-header');
  }else{
    $('body').removeClass('fixed-header');
  }
});