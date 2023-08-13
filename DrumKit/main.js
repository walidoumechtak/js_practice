window.addEventListener('keydown', function(e) {
   const    audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const    key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);

   console.log(key);
   if (!audio || !key)
        return;
    key.classList.add('play');
    setTimeout(() => {
        key.classList.remove('play');
    }, 350);
    audio.currentTime = 0; // back to the start of the audio
    audio.play();
});