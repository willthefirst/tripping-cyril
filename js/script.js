var APP = {
	init: function() {
		this.navToggle();
	},

	navToggle: function() {
		$('.nav-toggle').on('click', function() {
			$(this).toggleClass('off');
			$('.nav-overlay').toggleClass('off');
		});

		$('.nav-list a').on('click', function() {
			$('.nav-toggle').toggleClass('off');
			$('.nav-overlay').toggleClass('off');
		});
	}
};

$(document).ready(function() {
	APP.init();
});