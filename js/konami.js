/*-----Script to create a listener for the famous KONAMI-Code-----*/
//keys relevant to the KONAMI-Code, Keyboard-Codes taken from https://css-tricks.com/snippets/javascript/javascript-keycodes/
var allowedKeys = {37: 'left',38: 'up',39: 'right',40: 'down',65: 'a',66: 'b'};

//the correct sequence for the KONAMI-Code
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

//to keep track of the current position in the sequence
var kCodePos = 0;

//creating the listener
document.addEventListener('keydown', function(e) {
    //getting the value of the stroke key code from our previously initiated key-map
    var key = allowedKeys[e.keyCode];
    //getting the value of the currently required key for the KONAMI-code
    var requiredKey = konamiCode[kCodePos];
  
    //compare the user-entered key with the required one
    if (key == requiredKey) {
      //move the cursor in the KONAMI-Code Sequence forward
      kCodePos++;
  
      //if the last key is reached, we activate the secret function!
      if (kCodePos == konamiCode.length) {
        activateTheForce();
        kCodePos = 0;
      }
    } else {
        kCodePos = 0;
    }
  });
  
//the secret function that's called after the KONAMI-Code has been successfully entered
function activateTheForce() {
    $("#secret_main").show();
    $("#normal_main").hide();
    $(".back").toggleClass("open");

    var audio = new Audio('audio/lightsaber.mp3');
    audio.play();
}