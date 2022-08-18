(function() {
    const elemPlayButton = document.querySelector("#play-button");
    const elemVoice = document.querySelector("#voice");
    const elemText = document.querySelector("#text");

    elemPlayButton.addEventListener("click", function(){
        console.log(elemVoice.value);
        console.log(elemText.value);
        
        let url = "https://u74c2txuf1.execute-api.us-east-1.amazonaws.com/default/polly";
        url += "?voice=" + encodeURIComponent(elemVoice.value);
        url += "&text=" + encodeURIComponent(elemText.value);

        const elemAudio = document.createElement("AUDIO");
        elemAudio.style.display="none"
        document.body.appendChild(elemAudio);
        elemAudio.controls = true;
        elemAudio.src = url;
        elemAudio.play();

    });
}());
