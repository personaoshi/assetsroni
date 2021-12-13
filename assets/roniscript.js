function loadIframe(minigame) {
    var iframe = document.getElementById('iframe-minigame');
    iframe.src = minigame;
    iframe.style.display = "block";
}


function closeIframe() {
    var iframe = document.getElementById('iframe-minigame');
    iframe.style.display = "none";
}

function receiveMessage(event){
    if (event.data=="removetheiframe"){
       var element = document.getElementById('iframe-minigame');
       element.parentNode.removeChild(element);
    }
 }
 window.addEventListener("message", receiveMessage, false);