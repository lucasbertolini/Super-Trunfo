
const cartas = {
    0:{
      atributos:{
        velocidade:1300,
        empuxo:3500,
        envergadura:7.70,
        
    },
      img:"",
    },
    1:{
      atributos:{
        velocidade:1000,
        empuxo:3000,
        envergadura:6.70,
        
    },
      img:"",
    },
    2:{
      atributos:{
        velocidade:1500,
        empuxo:4500,
        envergadura:4.70,
        
    },
      img:"",
    }
}
const cartaMaquinaTexto = document.getElementById("cartaMaquina");
const cartaJogadorTexto = document.getElementById("cartaJogador");
const resultado = document.getElementById('resultado');
const jogadorGanhasTexto = document.getElementById('jogadorVitorias');
const maquinaGanhasTexto = document.getElementById('maquinaVitorias');
let maquinaGanhas = 0;
let jogadorGanhas = 0;
let cartaMaquina 
let cartaJogador 

  

function gerarNumero(){
    let numero = parseInt(Math.random()* 3);
    if(numero == 0 ){
      numero = parseInt(Math.random() * 3);
    }
    return numero;
}
function jogar(){
    
    const escolhaJogador = document.querySelectorAll('input[name = "atributoJogador"]'); 
    for(const botaoSelecionado of escolhaJogador){
          if(botaoSelecionado.checked){
            radioSelecionado = botaoSelecionado.value;
            switch (radioSelecionado) {
              case 'velocidade':
                if(cartas[cartaJogador].atributos.velocidade == cartas[cartaMaquina].atributos.velocidade){
                  resultado.innerHTML = 'Empate';
                }else if(cartas[cartaJogador].atributos.velocidade > cartas[cartaMaquina].atributos.velocidade){
                  resultado.innerHTML = 'Jogador venceu';
                  jogadorGanhas++;
                }else if (cartas[cartaJogador].atributos.velocidade < cartas[cartaMaquina].atributos.velocidade){
                  resultado.innerHTML = 'Maquina venceu ';
                  maquinaGanhas++;
                }
                break;
              case 'empuxo':
                if(cartas[cartaJogador].atributos.empuxo == cartas[cartaMaquina].atributos.empuxo){
                  resultado.innerHTML = 'Empate';
                }else if(cartas[cartaJogador].atributos.empuxo > cartas[cartaMaquina].atributos.empuxo){
                  resultado.innerHTML = 'Jogador venceu';
                  jogadorGanhas++;
                }else if(cartas[cartaJogador].atributos.empuxo < cartas[cartaMaquina].atributos.empuxo){
                  resultado.innerHTML = 'Maquina venceu';
                  maquinaGanhas++;
                }
                break;
              case 'envergadura':
                if(cartas[cartaJogador].atributos.envergadura == cartas[cartaMaquina].atributos.envergadura){
                  resultado.innerHTML = 'Empate';
                }else if(cartas[cartaJogador].atributos.envergadura > cartas[cartaMaquina].atributos.envergadura){
                  resultado.innerHTML = 'Jogador venceu';
                  jogadorGanhas++;
                }else if(cartas[cartaJogador].atributos.envergadura < cartas[cartaMaquina].atributos.envergadura){
                  resultado.innerHTML = 'Maquina venceu';
                  maquinaGanhas++;
                }
                break;

            }

            cartaMaquinaTexto.innerHTML = 
              `Velocidade ${cartas[cartaMaquina].atributos.velocidade} <Br>
              Empuxo ${cartas[cartaMaquina].atributos.empuxo} <br>
              Envergadura ${cartas[cartaMaquina].atributos.envergadura}`
            };
            jogadorGanhasTexto.innerHTML = ` ${jogadorGanhas}`;
            maquinaGanhasTexto.innerHTML = ` ${maquinaGanhas}`;


          }
}
function comecar(){
    cartaJogador = gerarNumero();
    cartaMaquina = gerarNumero();
    escreverAtributos();
    resultado.innerHTML = " ";
    cartaMaquinaTexto.innerHTML = " ";
    jogadorGanhasTexto.innerHTML = ` ${jogadorGanhas}`;
    maquinaGanhasTexto.innerHTML = ` ${maquinaGanhas}`;
  
}

function escreverAtributos(){
    cartaJogadorTexto.innerHTML =  
    `<input type="radio" id="velocidade" name="atributoJogador" value="velocidade" > 
    <label for ="velocidade">Velocidade</label> ${cartas[cartaJogador].atributos.velocidade} <br>
    <input type="radio" id="empuxo" name="atributoJogador" value="empuxo">
    <label for="empuxo">Empuxo</label> ${cartas[cartaJogador].atributos.empuxo} <br>
    <input type="radio" id="envergadura" name="atributoJogador" value="envergadura" >
    <label for="envergadura">Envergadura</label> ${cartas[cartaJogador].atributos.envergadura}

  `;
}
  


