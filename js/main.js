/*For Fixed Header*/
function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 50,
            header = document.querySelector("header");
        if (distanceY > shrinkOn) {
            classie.add(header,"smaller");
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
            }
        }
    });
}
window.onload = init();
/*For Fixed Header*/

(function($) {
    //on document ready
    $(function(){
        //go top
        var offset = 220;
        var duration = 1000;
        jQuery(window).scroll(function() {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.go-to-top').fadeIn(duration);
            } else {
                jQuery('.go-to-top').fadeOut(duration);
            }
        });
        
        jQuery('.go-to-top').click(function(event) {
            event.preventDefault();
            jQuery('html, body').animate({scrollTop: 0}, duration);
            return false;
        });

        //Function to update the copyright year
        function updateCopyrightYear() {
            $("#year").text(new Date().getFullYear());
        }
        // Call the function
        updateCopyrightYear();

        //Carousel
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                767:{
                    items:2
                },
                1000:{
                    items:4
                }
            }
        });

        //For nvaigation in small devices
        $('.main-navigation .navbar-nav a').on('click', function(){ 
            if($('.navbar-toggler').css('display') !=='none'){
                $(".navbar-toggler").trigger( "click" );
            }
        });

        //For menu scroll in small device
        $(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });

        //scroll to section
        $("a").on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top -95
                }, 1000, function(){
                });
            }
        });
    });
})(jQuery);