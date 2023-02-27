$(window).on("load",function() {
    function fade(pageLoad) {
      const windowTop=$(window).scrollTop(), windowBottom=windowTop+$(window).innerHeight();
      const min=0.1, max=1, threshold=0.01;
      
      $(".fade").each(function() {
        /* Check the location of each desired element */
        const objectHeight=$(this).outerHeight(), objectTop=$(this).offset().top, objectBottom=$(this).offset().top+objectHeight;
        /* Fade element in/out based on its visible percentage */
        if (objectTop < windowTop) {
          if (objectBottom > windowTop) {$(this).fadeTo(0,min+((max-min)*((objectBottom-windowTop)/objectHeight)/10));}
          else if ($(this).css("opacity")>=min+threshold || pageLoad) {$(this).fadeTo(0,min);}
        } else if (objectBottom > windowBottom) {
          if (objectTop < windowBottom) {$(this).fadeTo(0,min+((max-min)*((windowBottom-objectTop)/objectHeight)/10));}
          else if ($(this).css("opacity")>=min+threshold || pageLoad) {$(this).fadeTo(0,min);}
        } else if ($(this).css("opacity")<=max-threshold || pageLoad) {$(this).fadeTo(0,max);}
      });
    } fade(true); //fade elements on page-load
    $(window).scroll(function(){fade(false);}); //fade elements on scroll
  });