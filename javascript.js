const pikachu = document.querySelector('.pikachu');
const pokebola = document.querySelector('.pokebola');
const texto = document.querySelector('.texto');

const jump = () => {
    pikachu.classList.add('jump');

    setTimeout(() => {
        pikachu.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pokebolaPosition = pokebola.offsetLeft;
    const pikachuPosition = +window.getComputedStyle(pikachu).bottom.replace('px', '');

    console.log(pikachuPosition);

    if (pokebolaPosition <= 250 && pokebolaPosition > 130 && pikachuPosition < 80) {

        pokebola.style.animation = 'none';
        pokebola.style.left = `${pokebolaPosition}px`;

        pikachu.style.animation = 'none';
        pikachu.style.left = `${pikachuPosition}px`;

        pikachu.src = 'image/game-over.png'
        pikachu.style.width = '260px';

        pikachu.style.bottom = '-50px';

        texto.innerHTML="Game over";  

        clearInterval(loop);

        document.addEventListener('keydown', () => {
            location.reload();
        })
    }

}, 10)

document.addEventListener('keydown', jump);