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