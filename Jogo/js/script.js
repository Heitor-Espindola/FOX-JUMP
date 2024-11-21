


const fox = document.querySelector(".fox");

const tronco = document.querySelector(".tronco");
const background = document.querySelector(".background");
const front = document.querySelector(".front");
const startGame = document.querySelector('.start-game');




const jump = () =>{
    fox.classList.add('jump');

    setTimeout(() => {
            fox.classList.remove( 'jump');
    }, 1000);
}

function start(){
    let count = 0
    
}

const loop = setInterval(() => {
    const troncoPosition = tronco.offsetLeft;
    const foxPosition = Number(window.getComputedStyle(fox).bottom.replace('px', ''));
    const backgroundPosition = background.offsetLeft;
    const frontPosition = front.offsetLeft;

    if (troncoPosition <120 && troncoPosition > 0 && foxPosition < 80) {

        tronco.style.animation = 'none';
        tronco.style.left = `${troncoPosition}px`;

        fox.style.animation = 'none';
        fox.style.bottom = `${foxPosition}px`;

        background.style.animation = 'none';
        background.style.left = `${backgroundPosition}px`;

        front.style.animation = 'none';
        front.style.left = `${frontPosition}px`;

        fox.src = 'img/Raposa-dead.png';

        startGame.src = 'img/gameover.png';

        clearInterval(loop);

        document.addEventListener('keydown', () => { location.reload()   });
    }

}, 10);

document.addEventListener('keydown', jump);