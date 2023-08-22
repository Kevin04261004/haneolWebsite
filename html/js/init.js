//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "28 aug 2023 23:59:59",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	