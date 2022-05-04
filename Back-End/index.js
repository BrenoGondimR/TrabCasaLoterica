// JavaScript Para Gerar Codigo Aleatoriamente.


const max = 60;

const lista = [];
let counter = 1;
let realCounter = 0;
let prevRand = 1;
let multiplier = new Date().getMilliseconds();


const rand = () => {
    time = new Date().getTime();
    randValue = ((time / counter) / (prevRand + 10)) % max;
    result = (Math.ceil(randValue * multiplier) + counter % 2) % max;
    result = Math.ceil((result * randValue) % max);
    
    counter++;
    prevRand = randValue;

    if(realCounter == 50){
        counter = 1;
        lista.length = 0;
    }

    if (check(result) || result == 0) {
        return rand();
    }

    lista.push(result);
    realCounter++;
    return result;
}

const check = (value) => {
    const checker = value;
    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        if(checker === element){
            return true;
        }
    }
    return false;
} 


var randomNumbers = document.querySelectorAll(".randomize");
var btnsortear = document.getElementById('button_comecar')

btnsortear.addEventListener('click', function(){
    randomNumbers.forEach(randomNumber => {
        randomNumber.innerHTML = rand();
      }); 
})










// JavaScript Para Mudar efeitos Do Site.

var btn = document.getElementById('button_sorteio')
var img = document.querySelector('.imagem_machine')
var containerSorteio = document.querySelector('.escolha_sorteio')
var body = document.querySelector('body')
var btnStart = document.getElementById('button_comecar')






btn.addEventListener('click', function(){
    var container = document.querySelector('.main_sub')
    var mImg = document.querySelector('.main_imagem')

    function setNone(){
        container.style.display = 'none'
    }



    if(container.style.display === 'none'){
        container.style.display = 'block'

    }else{
        container.style.animationName = 'desaparecer'
        container.style.animationDuration = '3s'
        setTimeout(setNone, 3000)   
        btnStart.style.visibility = 'visible'
        mImg.style.marginTop = 'auto'
        img.style.width = '100vw'
        img.style.margin = 'auto'
        containerSorteio.style.visibility = 'visible'
        body.style.height = '1200px'
        img.style.animationName = 'transicao'
        img.style.animationDuration = '3s'
        img.style.marginTop = '-164px'
        img.style.transition = '3s'
        document.querySelector('.imagem_machine').src = "/Front-End/img/slot-machine-animate.svg";
        
        
    }
});



  