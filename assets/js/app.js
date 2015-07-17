// $(initPage);
 $(document).ready(function(){
 	initPage();
 });

var $customScroll = $("#customScroll");
if ($customScroll.length) {
	var content = $('#customScroll').children(),
		triggerDown = $('#customScroll').siblings('.scrollTrigger.down'),
		triggerUp = $('#customScroll').siblings('.scrollTrigger.up'),
		scrollTween;

	TweenMax.set(triggerUp, {opacity:0});

	function scrollDown() {
		scrollTween = TweenMax.to(content, 2.5, {top:'-150%',ease:Linear.easeNone});
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

}

function initPage(){
	// Page load event 
	$(document).foundation();    
	if ($("#gallery").length) { 
		$('#gallery').slick({
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
}