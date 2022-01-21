$(document).ready(function (params) {
    // smooth scrolling to navbar links & footer
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
        // ensuring this.hash has value before overriding default behav....
        if (this.hash!=="") {
            // prevent default anchor click behaviour
            event.preventDefault();
            // store hash
            var hash = this.hash;
            // using jquery's animate() method to add smoth page scroll
            // optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function(){
                // add hash(#) to url when done scrolling (default click behaviour)
                window.location.hash = hash;
            });
        } // End if
    });
})

$(window).scroll(function() {
    $(".slideanim").each(function(){
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
            $(this).addClass("slide");
            
        }
    });
});