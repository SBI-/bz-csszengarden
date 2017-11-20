jQuery(document).ready(function ($) {

    $(".page-wrapper").prepend('<div id="slider1_container" style="position: absolute; top: 200px; left: -500px; height: 699px; overflow: hidden; z-index: 1; width: 1950px"> \
            <div u="slides" style="cursor: move; position: absolute; left: 0px; top: 0px; height: 699px; overflow: hidden; width: 1950px;"> \
                <div><img u="image" src="images/aut.png" /></div> \
                <div><img u="image" src="images/elo.png" /></div> \
                <div><img u="image" src="images/inf.png" /></div> \
                <div><img u="image" src="images/kon.png" /></div> \
                <div><img u="image" src="images/kv.png" /></div> \
            </div> \
            <span u="arrowleft" class="jssora13l"> \
            </span> \
            <span u="arrowright" class="jssora13r"> \
            </span> \
        </div>');

	var options = {
		$AutoPlay: true,

		$PauseOnHover: true,               //[Optional] Whether to pause when mouse over if a slideshow is auto playing, default value is false

		$ArrowKeyNavigation: true,   	   //Allows arrow key to navigate or not
		$SlideWidth: 990,                  //[Optional] Width of every slide in pixels, the default is width of 'slides' container
		$SlideHeight: 699,                 //[Optional] Height of every slide in pixels, the default is width of 'slides' container
		$SlideSpacing: 0, 				   //Space between each slide in pixels
		$DisplayPieces: 2,                 //Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
		$ParkingPosition: 500,             //The offset position to park slide (this options applys only when slideshow disabled).

		$ArrowNavigatorOptions: {          //[Optional] Options to specify and enable arrow navigator or not
			$Class: $JssorArrowNavigator$, //[Requried] Class to create arrow navigator instance
			$ChanceToShow: 2,              //[Required] 0 Never, 1 Mouse Over, 2 Always
			$AutoCenter: 2,                //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
			$Steps: 1                      //[Optional] Steps to go for each navigation request, default value is 1
		}
	};

	var jssor_slider1 = new $JssorSlider$("slider1_container", options);

	//responsive code begin
	//you can remove responsive code if you don't want the slider scales while window resizes
	function ScaleSlider() {
		var parentWidth = jssor_slider1.$Elmt.parentNode.clientWidth;
        var bodyWidth = document.body.clientWidth;

		if (parentWidth) {
			//jssor_slider1.$SetScaleWidth(Math.min(parentWidth, 800));
			//jssor_slider1.$SetScaleWidth(Math.min(parentWidth, parentWidth));
            //jssor_slider1.$SetScaleWidth(1400);
            jssor_slider1.$SetScaleWidth(Math.min(bodyWidth, 1200));
        }
		else
			window.setTimeout(ScaleSlider, 30);
	}

	//ScaleSlider();

	if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
		$(window).bind('resize', ScaleSlider);
	}


	//if (navigator.userAgent.match(/(iPhone|iPod|iPad)/)) {
	//    $(window).bind("orientationchange", ScaleSlider);
	//}
	//responsive code end
});
