const pikachu = document.querySelector('.pikachu');
//imagem do pikachu
const pokebola = document.querySelector('.pokebola');
//imagem da pokebola
const texto = document.querySelector('.texto');
//paragrafo para o texto "game over"
const posts = document.querySelector('.posts');
const scoreplaca = document.querySelector('.score-placa');
var scores = document.querySelector('#score');
var score = Number(scores.textContent);

const novaImagem = new Image();
novaImagem.src = 'image/pichu.gif';

const novaImagem2  = new Image();
novaImagem2.src = 'image/pikachu.gif';

const novaImagem3  = new Image();
novaImagem3.src = 'image/raichu.gif';

function substituirPorGIF() {
    pikachu.src = novaImagem.src;
}
function substituirPorGIF2() {
    pikachu.src = novaImagem2.src;
}
function substituirPorGIF3() {
    pikachu.src = novaImagem3.src;
}

function jogoiniciado() {
    document.addEventListener('keydown', jump);
    scoreplaca.style.display = "flex";
    pokebola.style.display = "flex";
    posts.innerText = "";
    texto.innerHTML="Pressione qualquer tecla para pular"; 
    pokebola.classList.add('animar');
}



const jump = () => {

    pikachu.classList.add('jump');
    // adicionar animação de pulo criada no css

    setTimeout(() => {

        pikachu.classList.remove('jump');
        // remover animação de pulo criada no css

    }, 500);
}
function scoreadd() {
    score ++;
    scores.textContent = score;
}

scoreplaca.style.display = "none";
pokebola.style.display = "none";


function pichu(){
    substituirPorGIF();
    jogoiniciado();
    pikachu.style.width = '200px';

const loop = setInterval(() => {

    const pokebolaPosition = pokebola.offsetLeft;
    //pega a posição atual da pokebola no eixo x
    const pikachuPosition = +window.getComputedStyle(pikachu).bottom.replace('px', '');
    //pega a posição atual do pikachu no eixo y e converte em numero tirando o "px"
    console.log(pikachuPosition);

    if (pokebolaPosition <= 200 && pokebolaPosition > 120 && pikachuPosition < 80) {

        pokebola.style.animation = 'none';
        //faz a pokebola parar a animação
        pokebola.style.left = `${pokebolaPosition}px`;
        //faz a pokebola parar exatamente na posição em que encostou no pikachu

        pikachu.style.animation = 'none';
        pikachu.style.left = `${pikachuPosition+15}px`;
        //faz a pikachu parar exatamente na posição em que encostou na pokebola

        pikachu.src = 'image/pichuqueda.png'
        //substituia a imagem do pikachu para a que perdeu

        pikachu.style.width = '200px';

        pikachu.style.bottom = '0px';

        texto.innerHTML="Game over";  

        clearInterval(loop);

        document.addEventListener('keydown', () => {
            location.reload();
            //toda vez que ele perder se precionar uma tecla, a pagina regarrega e o jogo recomeça
        })

    }
    else{
        document.addEventListener('keydown', scoreadd);
    }

}, 10)

}

function pikachuzinho(){
    substituirPorGIF2();
    jogoiniciado();
    pikachu.style.width = '200px';


    const loop = setInterval(() => {
    
   
        const pokebolaPosition = pokebola.offsetLeft;
        //pega a posição atual da pokebola no eixo x
        const pikachuPosition = +window.getComputedStyle(pikachu).bottom.replace('px', '');
        //pega a posição atual do pikachu no eixo y e converte em numero tirando o "px"
        console.log(pikachuPosition);
    
        if (pokebolaPosition <= 200 && pokebolaPosition > 120 && pikachuPosition < 80) {
    
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
    
            pikachu.style.width = '250px';
    
            pikachu.style.bottom = '-50px';
    
            texto.innerHTML="Game over";  
    
            clearInterval(loop);
    
            document.addEventListener('keydown', () => {
                location.reload();
                //toda vez que ele perder se precionar uma tecla, a pagina regarrega e o jogo recomeça
            })
    
        }
        else{
            document.addEventListener('keydown', scoreadd);
        }
    
    }, 10)
    
}

function raichu(){
    substituirPorGIF3();
    jogoiniciado();
    pikachu.style.width = '170px';

        const loop = setInterval(() => {
        
            const pokebolaPosition = pokebola.offsetLeft;
            //pega a posição atual da pokebola no eixo x
            const pikachuPosition = +window.getComputedStyle(pikachu).bottom.replace('px', '');
            //pega a posição atual do pikachu no eixo y e converte em numero tirando o "px"
            console.log(pikachuPosition);
        
            if (pokebolaPosition <= 200 && pokebolaPosition > 120 && pikachuPosition < 80) {
        
                pokebola.style.animation = 'none';
                //faz a pokebola parar a animação
                pokebola.style.left = `${pokebolaPosition}px`;
                //faz a pokebola parar exatamente na posição em que encostou no pikachu
        
        
                pikachu.style.animation = 'none';
                //remove a animação do pikachu
                pikachu.style.left = `${pikachuPosition+25}px`;
                //faz a pikachu parar exatamente na posição em que encostou na pokebola
        
                pikachu.src = 'image/raichuqueda.png'
                //substituia a imagem do pikachu para a que perdeu
        
                pikachu.style.width = '200px';
        
                pikachu.style.bottom = '0px';
        
                texto.innerHTML="Game over";  
        
                clearInterval(loop);
        
                document.addEventListener('keydown', () => {
                    location.reload();
                    //toda vez que ele perder se precionar uma tecla, a pagina regarrega e o jogo recomeça
                })
        
            }
            else{
                document.addEventListener('keydown', scoreadd);
            }
        
        }, 10)
        
}


