var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = SpeechRecognition();

function start(){
    document.getElementById("testbox").innerHTML ="";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;console.log(Content);
}

function speak(){
    var synth = window.speechSynthesis;

    speek_data = document.getElementById("textbox").nodeValue;

    var utterThis = new SpeechSynthesisUtterance(speech_data);

    synth.speech(utterThis);
}