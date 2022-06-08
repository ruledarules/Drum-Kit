//      Using attributes to link up the data key attribute with the data key audio 
//      So when I hit a key on the keyboard, we will hear a sound

window.addEventListener('keydown', function(sounds){
    // console.log(sounds.keyCode);
    const audio = document.querySelector(`audio[data-key = '${sounds.keyCode}']`)
    const hitKey = document.querySelector(`.key[data-key = '${sounds.keyCode}']`)
    console.log(audio); // Logs the key presses connected to the audio elements
    if(!audio) return;
    audio.currentTime = 0 // rewinds the time of the audio 
    audio.play() // The music is playing, but the sound has to finish before doing the next.
    console.log(hitKey); // returns the div of the key itself onto the console
    hitKey.classList.toggle('playing')
});

function removeTransition(event){
    console.log(event);
    if(event.propertyName !== 'transform') return;
    this.classList.remove('playing');
}
const theKeys = document.querySelectorAll('.key') //
theKeys.forEach(function(key){
    key.addEventListener('transitionend', removeTransition)
}); // displays the NodeList in an array form