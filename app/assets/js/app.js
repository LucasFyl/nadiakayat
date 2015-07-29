// $(initPage);
 $(document).ready(function(){
 	initPage();
 	window.onresize = resize;
 });

var $customScroll = $("#customScroll");
var $gallery = $("#gallery");


function initCustomScroll() {
	var content = $('#customScroll > div'),
		triggerDown = $('.scrollControl .down'),
		triggerUp = $('.scrollControl .up'),
		scrollTween;

	console.log(content.height(), '????', $('#customScroll').height());

	if ( content.height() > $('#customScroll').height() ) {
		TweenMax.set(triggerUp, {opacity:0});
		function scrollDown() {
			scrollTween = TweenMax.to(content, 2.5, {top:'-100%',ease:Linear.easeNone});
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

function initGallerySlider() {
	$gallery.slick({
	    fade: true,
	    dots: true,
	    infinite: true,
	    cssEase: "linear",
	    speed: 500,
	    autoplay: true,
	    autoplaySpeed: 2000,
	    prevArrow: "<a href='#' class='gallerynav prevArrow'> <i class='fa fa-chevron-left'></i> </a>",
	    nextArrow: "<a href='#' class='gallerynav nextArrow'> <i class='fa fa-chevron-right'></i> </a>",
	});
}

function initProjectpage() {
	var sHeight = $('#gallery').height();
	TweenMax.set('#customScroll', {height:sHeight});

	// $('.slick-slide').magnificPopup({
	//   // delegate: 'img', // child items selector, by clicking on it popup will open
	//   type: 'image'
	//   // ,
	//   // gallery: {enabled:true}
	// });
	$('body').on('click', '.slick-slide', function(e) {
		e.preventDefault();
		var _image = $(this).find('img'),
			source = _image.attr('src');
		console.log(_image, source);
		$.magnificPopup.open({
			preloader: false,
			items: {
				src: source
			},
			type: 'image'

			// You may add options here, they're exactly the same as for $.fn.magnificPopup call
			// Note that some settings that rely on click event (like disableOn or midClick) will not work here
		}, 0);
	});

}
function resize() {
	console.log('page has been resized');
	if ( $('#main.project').length ) { initProjectpage(); }
}
function initPage(){
	// Page load event 
	$(document).foundation();    

	if ( $customScroll.length ) { initCustomScroll(); }
	if ( $('#main.project').length ) { initProjectpage(); }
	if ( $gallery.length ) { initGallerySlider(); }
}