
$(function() {
    var header = $("#header"),
        content = $("#header_content"),
        nav = $("#nav_link"),
        img = $("#logo_img"),
        text = $("#text_img"),
        introH = $("#intro").innerHeight(),
        scrollOffSet = $(window).scrollTop();



        // Header Fixed

        checkScroll(scrollOffSet);

        $(window).on("scroll", function(){
            scrollOffSet = $(this).scrollTop();

            checkScroll(scrollOffSet);
    });

    function checkScroll(scrollOffSet){
        if( scrollOffSet >= introH){
            header.addClass("fixed"),
            content.addClass("fixed"),
            nav.addClass("fixed"),
            img.addClass("fixed"),
            text.addClass("fixed");
        }else{
            header.removeClass("fixed"),
            content.removeClass("fixed"),
            nav.removeClass("fixed"),
            img.removeClass("fixed"),
            text.removeClass("fixed");

        }
    }


    // Scroll
 $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop:  blockOffset
        }, 500);
    });  
});