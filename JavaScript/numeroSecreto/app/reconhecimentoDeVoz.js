const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-BR'
recognition.start()


recognition.addEventListerner('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    console.log(e.results[0][0].transcript)

}

function exibeChuteNaTela(chute) {
    return elementoChute.innerHTML = `<div>Você disse</div> <span class="box">${chute} </span>`
}