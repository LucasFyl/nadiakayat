 $(document).ready(function(){
 	initPage();
 	window.onresize = resize;
 });

var $customScroll = $("#customScroll");
var $gallery = $("#gallery");

// Custom scroll function core
function initCustomScroll() {
	var content = $('#customScroll > div'),
		triggerDown = $('.scrollControl .down'),
		triggerUp = $('.scrollControl .up'),
		scrollTween;

	// console.log(content.height(), '????', $('#customScroll').height());

	if ( content.height() > $('#customScroll').height() ) {
		TweenMax.set(triggerUp, {opacity:0});
		function scrollDown() {
			scrollTween = TweenMax.to(content, 2.5, {top:'-110%',ease:Linear.easeNone});
			TweenMax.to(triggerUp, 0.8, {opacity:1,ease:Power3.easeIn,delay:0.5})
		}
		function scrollUp() {
			scrollTween = TweenMax.to(content, 1.2, {top:'0',ease:Linear.easeNone});
		}
		function scrollStop() {
			scrollTween.kill();		
			if ( content.position(top) === 0 ) {
				TweenMax.set(triggerUp, {opacity:0});
			}
		}
		triggerDown.hoverIntent(scrollDown, scrollStop);
		triggerUp.hoverIntent(scrollUp, scrollStop);
	} else {
		TweenMax.set(triggerUp, {opacity:0.2,cursor:'not-allowed'});
		TweenMax.set(triggerDown, {opacity:0.2,cursor:'not-allowed'});
	}
		
}

// init gallery slider 
// docs: http://kenwheeler.github.io/slick/
function initGallerySlider() {
	$gallery.slick({
	    fade: true,
	    dots: true,
	    infinite: true,
	    cssEase: "ease-in",
	    speed: 1600,
	    autoplay: true,
	    autoplaySpeed: 1500,
	    prevArrow: "<a href='#' class='gallerynav prevArrow'> <i class='fa fa-chevron-left'></i> </a>",
	    nextArrow: "<a href='#' class='gallerynav nextArrow'> <i class='fa fa-chevron-right'></i> </a>",
	});
}

function initProjectpage() {
	// Initiate gallery slider height
	var sHeight = $('#gallery').height();
	TweenMax.set('#customScroll', {height:sHeight});

	// Initiate magnifying popup and bind click event
	$('body').on('click', '.slick-slide', function(e) {
		e.preventDefault();
		var _image = $(this).find('img'),
			source = _image.attr('src');

		$.magnificPopup.open({
			preloader: false,
			items: {
				src: source
			},
			type: 'image'
		}, 0);
	});

}
function initPopup() {
	$('body').on('click', '.popupimg', function(e) {
		e.preventDefault();
		var _image = $(this).find('img'),
			source = _image.attr('src');

		$.magnificPopup.open({
			preloader: false,
			items: {
				src: source
			},
			type: 'image'
		}, 0);
	});
}
function hideLoader() {
	setTimeout(function(){
		TweenMax.to('#loader .center', 0.5, {opacity:0, display:'none', ease:Expo.easeOut});
		TweenMax.to('#loader', 1.5, {opacity:0, display:'none', ease:Power1.easeOut, delay:0.5});
	}, 1000)
}
function resize() {
	console.log('page has been resized');
	// restart project gallery init on resize
	if ( $('#main.project').length ) { initProjectpage(); }
}
function initPage(){
	// Page load event 
	$(document).foundation();    

	// Page specific load events
	if ( $customScroll.length ) { initCustomScroll(); }
	if ( $('#main.project').length ) { initProjectpage(); }
	if ( $gallery.length ) { initGallerySlider(); }
	if ( $('.popupimg').length ) { initPopup() }
	if ( $('#loader').length ) { hideLoader() }

}