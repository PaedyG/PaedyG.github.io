/*-----Script for Header-Text fade-in-----*/
$(document).ready(function () {
    $("#myname").fadeIn(3000); 
    $("#thatsme").fadeIn(5000);
});

/*-----Script for the radial-menu animations-----*/
$(document).ready(function() {
    var is_menu_open = false;
    var transformValues = {1: 'translate(0px,125px)',2: 'translate(60px,105px)',3: 'translate(105px,60px)'
        ,4: 'translate(125px,0px)',5: 'translate(30px,185px)',6: 'translate(185px,30px)'};

    $(".radial_menu").on("click", function() {

        if (!is_menu_open) {
            for (i = 1; i < 7; i++) {
                $("#menu_item" + i).css({
                    'background-color': '#169bbd', 
                    'transform': transformValues[i]
                });
            }            
        } else {
            $(".menu_item").css({
                'background-color': 'darkGray', 
                'transform': 'none'
            });   
        }
        is_menu_open = !is_menu_open;
    });
});