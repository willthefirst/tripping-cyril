var APP = {
	init: function() {
		this.navToggle();
	},

	navToggle: function() {
		$('.nav-toggle').on('click', function() {
			$(this).toggleClass('off');
			$('.nav-overlay').toggleClass('off');
		});
	}
};

$(document).ready(function() {
	APP.init();
});