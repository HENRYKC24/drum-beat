function runSwitch( letter ) {
  switch ( letter ) {
    case 'w':
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'a':
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case 's':
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case 'd':
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case 'j':
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case 'k':
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case 'l':
      var kick = new Audio('sounds/kick.mp3');
      kick.play();
      break;
  };
}

function changeTextColor( letter ) {
  
  let functionalKeys = ['a', 's', 'd', 'f', 'j', 'k', 'l'];
  if (functionalKeys.includes(letter)) {
    var pressedButton = document.querySelector('.' + letter);
    pressedButton.classList.add('pressed');
    setTimeout(function(){
      pressedButton.classList.remove('pressed');
    }, 100);
  }
}
var allButtons = document.querySelectorAll('button');
var pressedKey;
document.addEventListener('keypress', function(event) {
  var letter = event.key.toLowerCase();
  changeTextColor(letter);
  if (letter === 'Enter') {
    letter = 'b';
  }
  runSwitch(letter);
})
for( var i = 0; i < allButtons.length; i++ ) {
  allButtons[i].addEventListener('click', function(e) {
    var thisText = this.textContent;
    //change all text back to red except the clicked which will be white
    changeTextColor(thisText);
    //play sound based on the button clicked
    runSwitch(thisText);
  });
};
