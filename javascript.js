const pikachu = document.querySelector('.pikachu');
//imagem do pikachu
const pokebola = document.querySelector('.pokebola');
//imagem da pokebola
const texto = document.querySelector('.texto');
//paragrafo para o texto "game over"

const jump = () => {

    pikachu.classList.add('jump');
    // adicionar animação de pulo criada no css

    setTimeout(() => {

        pikachu.classList.remove('jump');
        // remover animação de pulo criada no css

    }, 500);
}

const loop = setInterval(() => {

    const pokebolaPosition = pokebola.offsetLeft;
    //pega a posição atual da pokebola no eixo x
    const pikachuPosition = +window.getComputedStyle(pikachu).bottom.replace('px', '');
    //pega a posição atual do pikachu no eixo y e converte em numero tirando o "px"
    console.log(pikachuPosition);

    if (pokebolaPosition <= 250 && pokebolaPosition > 130 && pikachuPosition < 80) {

        pokebola.style.animation = 'none';
        //faz a pokebola parar a animação
        pokebola.style.left = `${pokebolaPosition}px`;
        //faz a pokebola parar exatamente na posição em que encostou no pikachu


        pikachu.style.animation = 'none';
        //remove a animação do pikachu
        pikachu.style.left = `${pikachuPosition}px`;
        //faz a pikachu parar exatamente na posição em que encostou na pokebola

        pikachu.src = 'image/game-over.png'
        //substituia a imagem do pikachu para a que perdeu

        pikachu.style.width = '260px';

        pikachu.style.bottom = '-50px';

        texto.innerHTML="Game over";  

        clearInterval(loop);

        document.addEventListener('keydown', () => {

            location.reload();
            //toda vez que ele perder se precionar uma tecla, a pagina regarrega e o jogo recomeça

        })
    }

}, 10)

document.addEventListener('keydown', jump);