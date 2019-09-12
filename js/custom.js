/*-----Script for Header-Text fade-in-----*/
$(document).ready(function () {
    $("#myname").fadeIn(3000); 
    $("#thatsme").fadeIn(5000);
});

/*-----Script for the radial-menu animations-----*/
$(document).ready(function() {
    var is_menu_open = false;

    $(".radial_menu").on("click", function() {

        if (!is_menu_open) {
            for (i = 1; i < 7; i++) {
                $("#menu_item" + i).css({
                    'background-color': '#169bbd', 
                    'transform': 'translate(60px,105px)'
                });
            }            
        } else {
            for (i = 1; i < 7; i++) {
                $("#menu_item" + i).css({
                    'background-color': 'darkGray', 
                    'transform': 'none'
                });   
            }
        }
        is_menu_open = !is_menu_open;
    });
});