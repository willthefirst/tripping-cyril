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

	vidToggle: function() {
		$('.vid-toggle').on('click', function() {
			$(this).parent().toggleClass('vid-on');
		});
	}
};

jQuery(document).ready(function($) {
	APP.init();
});