let time = 10000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#slider img")
    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)

function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const finalizar = document.querySelector('.finalizar');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

iniciar.addEventListener('click', function(event) {
    relogio.classList.remove('pausar');
    clearInterval(timer);
    iniciaRelogio();
});

pausar.addEventListener('click', function(event) {
    clearInterval(timer);
    relogio.classList.add('pausar');
});

finalizar.addEventListener('click', function(event) {
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
    segundos = 0;
    relogio.classList.add('finalizar');
});




