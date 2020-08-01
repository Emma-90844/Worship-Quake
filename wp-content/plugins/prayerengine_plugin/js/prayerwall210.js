/* Prayer Engine - This updates the prayer counter on individual prayer requests via AJAX */
jQuery(document).ready(function() {
	jQuery(".submitlink").click(function() {
		var pid = jQuery(this).siblings("input.id").attr("value");
		var noncename = "enmpe_iprayed"+pid;
		var thenonce = jQuery('#'+noncename).attr("value");

		jQuery.ajax({
	        url: peajax.ajaxurl, 
	        data: {
	            'action': 'prayerengine_prayercount',
	            'enmpe_nonce' : thenonce,
	            'pid' : pid
	        },
	        success:function(data) {
	            jQuery('#count'+pid).html( data );
	        },
	        error: function(errorThrown){
	            console.log(errorThrown);
	        }
	    });
		return false;
	});

	jQuery(".pe-prayer-form").click( 
		function () { 
			jQuery("#pe-form-container").slideToggle();
			return false;
		}
	);

	jQuery(".pe-focus-form").click( 
		function () { 
			jQuery(".enmpe-signupform").slideToggle();
			return false;
		}
	);
	
	jQuery("#prayerengine_twitter_ok").click(function () { //If enabled, toggle the Prayer Tweet field
		jQuery("#pe-twitter-area").slideToggle();
	});

	var enmpedocwidth = jQuery( document ).width();
	var enmpeembedwidth = jQuery('#prayerengine').width();

	if ( enmpeembedwidth < 701 && enmpedocwidth > 715 ) {
		jQuery('.enmpe-signupform').addClass('pe-small');
		jQuery('.enmpe-prayerfocus-table').addClass('pe-small');
	};

	if ( (enmpeembedwidth > 700 && enmpeembedwidth < 825) && enmpedocwidth > 825 ) {
		jQuery('.enmpe-signupform').addClass('pe-medium');
		jQuery('.enmpe-prayerfocus-table').addClass('pe-medium');
	};

});