AOS.init({
        offset: 100,
        duration: 800,
        delay:300,
    });


    $(function() {$('a[href^="#"]').click(function() {
        var headerHight = 94;
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - headerHight;
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });
    });

    $(function(){

        
    
    
    /* フェードイン */
        $('#nav_toggle').click(function(){
          $(this).toggleClass('show');
          $('.header_nav').fadeToggle(500);
        }); 
        
    
      
    
       
    
    });