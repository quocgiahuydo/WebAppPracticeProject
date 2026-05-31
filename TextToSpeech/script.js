function textToAudio(){
    let msg = document.querySelector('.text').value;
    let speech = new SpeechSynthesisUtterance();

    speech.lang ='en-US';
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 0.5;
    speech.pitch = 1;

    speechSynthesis.speak(speech)



}