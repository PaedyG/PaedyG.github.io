/*-----Script for Header-Text fade-in-----*/
$(document).ready(function () {
    $("#myname").fadeIn(3000); 
    $("#thatsme").fadeIn(5000);
});

/*-----Script for the radial-menu animations-----*/
$(document).ready(function() {
    var is_menu_open = false;
    var transformValues = {1: 'translate(-40px,120px)',2: 'translate(0px,100px)',3: 'translate(40px,80px)'
        ,4: 'translate(80px,60px)',5: 'translate(120px,40px)',6: 'translate(160px,20px)'};

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