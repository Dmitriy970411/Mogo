$(function () {
  // header-nav
  var headerNav = $("#header-nav");
  var scrollOffset = $(window).scrollTop();
  var headerH = $("#header").innerHeight();
   let burger = $("#burger");
  let navToggle = $(".nav-opener");
  let topNav = $(".top-nav");

  // header-fixed
  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset > headerH) {
      headerNav.addClass("fixed");
    } else {
      headerNav.removeClass("fixed");
    }
  }

  // smooth-scroll
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    var $this = $(this);
    var elementId = $this.data("scroll");
    var idOffset = $(elementId).offset().top;

    $("body").removeClass("modal-open");
    burger.removeClass("nav-drop");
    topNav.removeClass("nav");
    navToggle.removeClass("nav-active");
    
    $("html,body").animate({
      scrollTop: idOffset
    }, 1000);
  })

  // burger-menu
  navToggle.on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass("nav-active");
    burger.toggleClass("nav-drop");
    topNav.toggleClass("nav");
    $('body').toggleClass('modal-open');
});

});

// gallery-work-section
$('#work-items').masonry({

  itemSelector: '.work-item',

  singleMode: false,

  isResizable: true,

  isAnimated: true,

  animationOptions: {
    queue: false,
    duration: 500
  }

});

// acardion
$(function () {
  //прикрепляем клик по заголовкам acc-head
  $('#accordeon .acc-head').on('click', f_acc);

});

function f_acc() {
  //скрываем все кроме того, что должны открыть
  $('#accordeon .acc-body').not($(this).next()).slideUp(1000);
  // открываем или скрываем блок под заголовком, по которому кликнули
  $(this).next().slideToggle(2000);
}

// carousel
$('.slick-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,

  responsive: [{
    breakpoint: 768,
    settings: {
      autoplay: true,
      autoplaySpeed: 2000
    }
  }]
});

// popap
$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: '.work-item',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    fixedContentPos: true,
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] 
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
  });
  
});

// COUNTER
$(".fact-number").each(function(){
  $(this).prop("Counter",0).animate({

    Counter:$(this).text()
  },{
    duration: 50000,
    easing: "swing",
    step:function(now){
      $(this).text(Math.ceil(now));
    }
  });
});