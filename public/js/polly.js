(function() {
    const elemPlayButton = document.querySelector("#playbtn");
    const elemVoice = document.querySelector("#voice");
    const elemText = document.querySelector("#text");

    elemPlayButton.addEventListener("click",function(){
        
        let url = "";
        url += "?voice=" + encodeURIComponent(elemVoice.value);
        url += "&text=" + encodeURIComponent(elemText.value);

        const elemAudio = document.createElement("AUDIO");
        document.body.appendChild(elemAudio);
        elemAudio.controls = true;
        elemAudio.src = url;
        elemAudio.play();

    });
}());
