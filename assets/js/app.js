$(initPage);
 // or $(document).ready(initPage);

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
	$(document).foundation();    // Page load event where you can initialize values and call other initializers.
}