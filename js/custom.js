//Script for Header-Text fade-in
$(document).ready(function () {
    $("#myname").fadeIn(3000); 
    $("#thatsme").fadeIn(5000);
});


//Script for the radial-menu animations
$(document).ready(function() {
    var is_menu_open = false;

    $(".radial_menu").on("click", function() {

        if (!is_menu_open) {
            $(".menu_item").css({
                'background-color': 'gray', 
                'transform': 'translate(60px,105px)'
            });

            $(".menu_home_secret").fadeIn(1000);

            $(".menu_home").css({
                'display': 'none'
            });

        } else {
            $(".menu_item").css({
                'background-color': 'darkGray', 
                'transform': 'none'
            });

            $(".menu_home").fadeIn(1000);

            $(".menu_home_secret").css({
                'display': 'none'
            });
        }
        
        is_menu_open = !is_menu_open;
    });
});