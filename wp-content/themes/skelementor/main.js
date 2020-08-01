        console.log("here3");
jQuery(window).load(function() { 
        console.log("here2");
    jQuery(".pp-feed-item").each(function() { 
        console.log("here");
       jQuery(this).css("background-image", "url(" + jQuery(this).find("img").attr("src") + ")"); 
       jQuery(this).css("background-size", "cover"); 
    });    
});



jQuery(document).ready(function() { 
   setTimeout(function() { 
       var current = window.location.href;
       var current = current.split('#tab');
       if (current.length > 1) { 
           jQuery('.elementor-tab-title').removeClass('elementor-active');
           jQuery('.elementor-tab-title[data-tab="'+current[1]+'"]').addClass("elementor-active");
           jQuery('.elementor-tab-content').hide();
           jQuery('.elementor-tab-content[data-tab="' + current[1] + '"]').show();
       }
   },200); 
   jQuery('.elementor-tab-title[data-tab]').click(function() { 
      var current_location = window.location.href;
      current_location = current_location.split('#');
      window.location = current_location[0]+'#tab'+jQuery(this).attr('data-tab'); 
   });
});