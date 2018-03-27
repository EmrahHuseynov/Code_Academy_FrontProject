$(document).ready(function () {

    $('.elements').mouseover(function(){
        $('.elementsOpen').css('display','block')
    })
    $('.elements').mouseout(function(){
        $('.elementsOpen').css('display','none')
    })
    $('.elementsOpen').mouseover(function(){
        $(this).css('display','block')
    })
    $('.elementsOpen').mouseout(function(){
        $(this).css('display','none')
    })
    $('.nav-link').each(function(){
        $(this).mousemove(function(){
            $(this).css('color','#69B417')
            $(this).next().css('display','block')           
        })
    })
    $('.nav-link').each(function(){
        $(this).mouseout(function(){
            $(this).css('color','#8c8c8c')
            $(this).next().css('display','none')
        })
    })
        $('.dropdown-menu').mousemove(function(){
            $(this).css('display','block')           
    })
        $('.dropdown-menu').mouseout(function(){
            $(this).css('display','none')
        })





    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 2000,
        dots: true,
        

        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: false,
                loop: true
            }
        }
    })


  


   



    var a=true;
  
     $(".animate").click(function(){
     if(a==true){
        $(".changecolor").css({"left":"0"});
        a=false;
     }
     else{
        $(".changecolor").css({"left":"-300px"})
        a=true;
     }
     });

     $(".colors>div").click(function(){
         var jcolor=$(this).css("background-color");
         $(".helptitle").css({"backgroundColor":jcolor});

     });
    




 
        var scrollTop = $(".scrollbutton");
        $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        if(topPos>1350){
            $('.count-this').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
        
                        }
        
                    });
        
            });
        
        }


        
        if (topPos > 700) {
            $(scrollTop).css("opacity", "1");
    
        } else {
            $(scrollTop).css("opacity", "0");
        }
        
        
    
        }); 
    
     $(scrollTop).click(function() {
        $('html, body').animate({
          scrollTop: 0
        }, 800);
        return false;
    
      }); 

     




     
      $(".gethelp").css({"bottom":"-320px"});
    var help=false;
     $(".helptitle").click(function(){
      if(!help){
        $(".gethelp").css({"bottom":"0"});
        help=true;
      }else{
        $(".gethelp").css({"bottom":"-320px"});
        help=false;
       
          
      }
   })





    });

