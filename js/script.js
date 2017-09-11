
$("body").append("<div class='loading'></div>");

jQuery(window).on('load',function(){
	"use strict";
	$(".loading").fadeOut();
});
//--- document ready 
jQuery(document).ready(function($) {
	
	"use strict";
	
	//===== Responsive Header =====//
	$('.menu-btn').on('click', function () {
		$('.responsive-menu').addClass('slidein');
		return false;
	});
	$('.menu-close-btn').on('click', function () {
		$('.responsive-menu').removeClass('slidein');
		return false;
	});
	$('.responsive-menu li.menu-item-has-children > a').on('click', function () {
		$(this).parent().siblings().children('ul').slideUp();
		$(this).parent().siblings().removeClass('active');
		$(this).parent().children('ul').slideToggle();
		$(this).parent().toggleClass('active');

	});

	$('#myInternalTabs').on('click', 'a', function(e){
		e.preventDefault();

		var tab_content = $(this).parents('.tab-pane').find('.tab-content');
		// $(this).parent().find('.nav-item a').removeClass('current');
		// $(this).addClass('current');
		var id = $(this).attr('href');
		console.log(id);
		tab_content.find('.tab-pane').removeClass('tab-show animated fadeIn');

		tab_content.find(id).addClass('tab-show animated fadeIn');
	});

//==== cart dropdown	
$('.top-shop').on('click', function () {
	$('.top-shop').addClass('active');

});
$('.close-btn').on('click', function () {
	$('.top-shop').removeClass('active');
	return false;
});

//--------- top search 			
$('.top-search > i').on('click', function () {
	$('.top-search form').toggleClass('active');
});

//----- popup display on window load	
function delay(){
	$(".popup-wraper").fadeIn();
}
window.setTimeout( delay, 3000 );

$('.close-btn-popup').on('click', function() {
	$('.popup-wraper').addClass('closed');
	return false;
});

//nice select
if ($.isFunction($.fn.niceSelect)) {
	$('select').niceSelect();
}
		
//----- add item plus minus button
if ($.isFunction($.fn.userincr)) {
	$(".manual-adjust").userincr({
		buttonlabels:{'dec':'-','inc':'+'},
	}).data({'min':0,'max':20,'step':1});
}		

//Bootstrap date picker	
if ($.isFunction($.fn.datepicker)) {
	$('.datepicker').datepicker({
		format: 'mm/dd/yyyy',
		startDate: '-3d'
	});
}

//scrollbar plugin
if ($.isFunction($.fn.perfectScrollbar)) {
	$('.twitter-widget,.res-menu-dropdown,.responsive-menu').perfectScrollbar();
}
//----- owl carousel
if ($.isFunction($.fn.owlCarousel)) {	
	$('.feature-caro-btn').owlCarousel({ 
		loop:true,
		margin:0,
		smartSpeed: 1000,
		responsiveClass:true,
		autoplay:true,
		URLhashListener:true,
		startPosition: 'URLHash',
		responsive:{
			0:{
				items:1,
				nav:false,
				dots:false
			},
			600:{
				items:1,
				nav:true,
				dots: false
			},
			1000:{
				items:1,
				nav:true,
				loop:false,
				dots:false
			}
		}
	});

	$('.image-carouesl').owlCarousel({ 
		loop:true,
		margin:0,
		smartSpeed: 1000,
		responsiveClass:true,
		autoplay:true,
		responsive:{
			0:{
				items:1,
				nav:false,
				dots:false
			},
			600:{
				items:1,
				nav:false,
				dots: false
			},
			1000:{
				items:1,
				nav:false,
				dots:false
			}
		}
	});


	$('.feature-carousel').owlCarousel({
		items:1,
		loop:true,
		smartSpeed: 1000,
		center:true,
		autoplay:true,
		margin:0,
		dots:false,
		nav:true,
		URLhashListener:true,
		autoplayHoverPause:true,
		responsiveClass:true,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		startPosition: 'URLHash',
		responsive:{
			0:{
				items:1,
				nav:false,
				dots:false
			},
			600:{
				items:1,
				nav:false
			},
			1000:{
				items:1,
				nav:false,
				loop:false
			}
		}	
	});

	$('.happy-client-caro').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		autoplay: true,
		autoplayTimeout: 1500,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		nav: false,
		dots: false,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut', 
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:1,

			},
			1000:{
				items:1,
			}
		}

	});

	$('.services-caro').owlCarousel({
		items: 3,
		loop: true,
		margin: 10,
		autoplay: false,
		autoplayTimeout: 2000,
		smartSpeed: 1500,
		autoplayHoverPause: true,
		nav: false,
		dots: true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:2,

			},
			1000:{
				items:3,
			}
		}

	});

	$('.sponsor-caro').owlCarousel({
		items: 1,
		loop: true,
		margin: 10,
		autoplay: false,
		autoplayTimeout: 2000,
		smartSpeed: 1500,
		autoplayHoverPause: true,
		nav: false,
		dots: true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:1,

			},
			1000:{
				items:1,
			}
		}

	});
}

//----- layer slider
if ($.isFunction($.fn.layerSlider)) {
	jQuery("#layerslider").layerSlider({
		responsive: true,
		responsiveUnder: 1280,
		layersContainer: 1170,
		skin: 'fullwidth',
		hoverPrevNext: true,
		skinsPath: 'layerslider/skins/'
	});
}

//----- sticky header
var menu_height = $('header').innerHeight();
$(window).scroll(function () {
	var scroll = $(window).scrollTop();
	if (scroll >= 5) {
		$('.stick').addClass('sticky');
	} else {
		$('.stick').removeClass('sticky');
	}
});

if ($('header').hasClass('stick')) {
	$('.theme-layout').css({'padding-top': menu_height});
}
//----- parallax
if ($.isFunction($.fn.scrolly)) {
	$('.parallax').scrolly({bgParallax: true});
}

//----- blog post share
$('.share-this > a').on('click', function() {
	$(this).siblings('ul').toggleClass('active');
	return false;
});

//------ Bootstrap date picker	
if ($.isFunction($.fn.datepicker)) {
	$('.datepicker').datepicker({
		format: 'mm/dd/yyyy',
		startDate: '-3d'
	});
}

//-------counter for funfacts
if ($.isFunction($.fn.counterUp)) {
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
}

});




