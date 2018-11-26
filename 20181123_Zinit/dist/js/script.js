/* ========== slider  ==========  */
(function() {
	if ($('.slick-slider').length) {

		$('.slick-slider').slick({
			dots: true,
			infinite: true,
			speed: 600,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2600,
			arrows: true,
			lazyLoad: 'ondemand',
			pauseOnHover: true,
			responsive: [
	    		{
	    			breakpoint: 768,
	    			settings: {
						arrows: false,
					}
	    		}
    		]
		});

	};

})();

/* ========== slider END ==========  */



/* ========== mob menu ==========  */
(function() {
	$('.menu-wrapper').on('click', function() {
		$('.hamburger-menu').toggleClass('animate');
	})
})();

$(document).ready(function(){
	$(".menu-wrapper").click(function(){ 
		$(".menu").slideToggle(700);
		$('header').toggleClass('open');
		$('body').toggleClass('disabled');
	});
});
/* ========== mob menu END ==========  */



/* ========== arrow up ==========  */
(function() {
	var arrowUp = $('.arrow-top');

	arrowUp.on('click', function() {
       $('html').animate({
            scrollTop: $('html').offset().top
        }, 400);
    });

    $(window).on('scroll', function() {
        var scrollTop = $(window).scrollTop();
        scrollTop >= 400 ? $(arrowUp).addClass('arrow-visible') : $(arrowUp).removeClass('arrow-visible');
    });
})();
/* ========== arrow up END ==========  */



/* ========== parallax ==========  */
$('.parallax-window').parallax({
    speed: 0.03
});

/* ========== parallax END ==========  */



/* ========== nav menu bottom accordion ==========  */
$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		var links = this.el.find('.link');
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.sub-menu-bottom').not($next).slideUp().parent().removeClass('open');
		};
	}

	var accordion = new Accordion($('.nav-menu__block-bottom__categories'), false);
});
/* ========== nav menu bottom accordion END ==========  */



/* ========== news block animation ==========  */
;(function($){
	var controller = new ScrollMagic.Controller();

	var tlAppearItem = new TimelineMax()
	.staggerFrom('.news-block > .news-block__item', 1, {
		cycle: {
			y: [400]
		},
		opacity:0
	}, 0.5, 0.5);


	var scene  = new ScrollMagic.Scene({
			triggerElement: ".news__section",
			triggerHook: 0.7,
		})
		.setTween(tlAppearItem)
		.addTo(controller);

	// scene.addIndicators();

})(jQuery);

/* ========== news block animation END ==========  */

