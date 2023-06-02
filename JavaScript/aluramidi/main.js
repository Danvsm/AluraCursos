/*

------ Esse modo que eu fiz foi sem ver a explicação do professor porém tem um grande problema, quando eu quiser aumentar quantidade de teclados o codigo vai ficar muito grande --------

function som (toque) {
    if (toque == 0) {
        document.querySelector('#som_tecla_pom').play()
    }   if (toque == 1) {
        document.querySelector('#som_tecla_clap').play()
    }
    if (toque == 2) {
        document.querySelector('#som_tecla_tim').play()
    }
    if (toque == 3) {
        document.querySelector('#som_tecla_puff').play()
    }
    if (toque == 4) {
        document.querySelector('#som_tecla_splash').play()
    }
    if (toque == 5) {
        document.querySelector('#som_tecla_toim').play()
    }
    if (toque == 6) {
        document.querySelector('#som_tecla_psh').play()
    }
    if (toque == 7) {
        document.querySelector('#som_tecla_tic').play()
    }  if (toque == 8) {
        document.querySelector('#som_tecla_tom').play()
    }
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = function () { som (0);} 
listaDeTeclas[1].onclick = function () { som (1);} 
listaDeTeclas[2].onclick = function () { som (2);} 
listaDeTeclas[3].onclick = function () { som (3);} 
listaDeTeclas[4].onclick = function () { som (4);} 
listaDeTeclas[5].onclick = function () { som (5);} 
listaDeTeclas[6].onclick = function () { som (6);} 
listaDeTeclas[7].onclick = function () { som (7);}
listaDeTeclas[8].onclick = function () { som (8);} 

*/

/*

function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play()
}  

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length ) {

const tecla = listaDeTeclas[contador]
const instrumento = tecla.classList[1]

tecla.onclick = function () { 
    tocaSom(`#som_${instrumento}`)  //Como todos id começa "#som_" usei a const instrumento para passa dentro da function anônimo sem necessidade de criar outra var
}

contador += 1
}

*/


function tocaSom (seletorAudio) {
       const elemento = document.querySelector(seletorAudio)
       
       if (elemento && elemento.localName === 'audio') {
            elemento.play();
       } else {
            console.log('Elemento ou Seletor não encontrado')
       }
       
    }  

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    
    const idAudio = `#som_${instrumento}`; //template string

    console.log(idAudio)

    tecla.onclick = function () { 
        tocaSom(idAudio)
    }

    tecla.onkeydown = function (evento) {
        console.log(evento.code)
        
        if ('space' == evento.code || 'Enter' == evento.code){
            tecla.classList.add('ativa')
        }
        
    }
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa')
    }
}
