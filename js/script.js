var APP = {
	init: function() {
		this.navToggle();
		this.vidToggle();
	},

	navToggle: function() {
		$('.nav-toggle').on('click', function() {
			$(this).toggleClass('off');
			$('.nav-slider').toggleClass('off');
		});

		$('.nav-list a').on('click', function() {
			$('.nav-toggle').toggleClass('off');
			$('.nav-slider').toggleClass('off');
		});
	},

	vidPlaying: true,

	vidToggle: function() {
		$('.vid-toggle').on('click', function() {
			$(this).parent().toggleClass('vid-on');
			var vid = $(this).siblings('.car-vid').attr('id');
			if ( APP.vidPlaying ) {
				vid.pauseVide0();
				APP.vidPlaying = false;
			}
			else {
				vid.playVideo();
				app.vidPlaying = true;
			}
		});
	}
};

jQuery(document).ready(function($) {
	APP.init();
});