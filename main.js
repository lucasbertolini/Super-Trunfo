
const cartas = {
    0:{
      atributos:{
        peso:946,
        cilindrada:999,
        velocidadeMax:163,
        nome:"Gol"
        
    },
      img:"<img  class='imagenCartaJogador' src='./img/vw-gol.png' rel='VW Gol'>",
    },
    1:{
      atributos:{
        peso:1500,
        cilindrada:1400,
        velocidadeMax:238,
        nome:'Golf'
        
    },
      img:"<img class='imagenCartaJogador' src='./img/vw-golf.png' rel='VW Golf'>",
    },
    2:{
      atributos:{
        peso:1721,
        cilindrada:1968,
        velocidadeMax:218,
        nome:'Passat'
        
    },
      img:"<img class='imagenCartaJogador' src='./img/vw-passat.png' rel='VW Passat'>",
    }
}
const cartaMaquinaTexto = document.getElementById("cartaMaquina");
const cartaJogadorTexto = document.getElementById("cartaJogador");
const resultado = document.getElementById('resultado');
const jogadorGanhasTexto = document.getElementById('jogadorVitorias');
const maquinaGanhasTexto = document.getElementById('maquinaVitorias');
const jogarBtn = document.querySelector('#botao');
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
      jogarBtn.disabled = true;
      radioSelecionado = botaoSelecionado.value;
      switch (radioSelecionado) {
        
        case 'peso':
          if(cartas[cartaJogador].atributos.peso == cartas[cartaMaquina].atributos.peso){
            resultado.innerHTML = 'Empate';
          }else if(cartas[cartaJogador].atributos.peso < cartas[cartaMaquina].atributos.peso){
            resultado.innerHTML = 'Jogador venceu';
            jogadorGanhas++;
          }else if (cartas[cartaJogador].atributos.peso > cartas[cartaMaquina].atributos.peso){
            resultado.innerHTML = 'Maquina venceu ';
            maquinaGanhas++;
          }
          break;
          case 'cilindrada':
            if(cartas[cartaJogador].atributos.cilindrada == cartas[cartaMaquina].atributos.cilindrada){
              resultado.innerHTML = 'Empate';
            }else if(cartas[cartaJogador].atributos.cilindrada > cartas[cartaMaquina].atributos.cilindrada){
              resultado.innerHTML = 'Jogador venceu';
              jogadorGanhas++;
            }else if(cartas[cartaJogador].atributos.cilindrada < cartas[cartaMaquina].atributos.cilindrada){
              resultado.innerHTML = 'Maquina venceu';
              maquinaGanhas++;
            }
            break;
          case 'velocidadeMax':
            if(cartas[cartaJogador].atributos.velocidadeMax == cartas[cartaMaquina].atributos.velocidadeMax){
              resultado.innerHTML = 'Empate';
            }else if(cartas[cartaJogador].atributos.velocidadeMax > cartas[cartaMaquina].atributos.velocidadeMax){
              resultado.innerHTML = 'Jogador venceu';
              jogadorGanhas++;
            }else if(cartas[cartaJogador].atributos.velocidadeMax < cartas[cartaMaquina].atributos.velocidadeMax){
              resultado.innerHTML = 'Maquina venceu';
              maquinaGanhas++;
            }
            break;

      }

      cartaMaquinaTexto.innerHTML = 
        `<div class='cartaMaquinaImg'>
          ${cartas[cartaMaquina].img}
        </div>
        <h3>${cartas[cartaMaquina].atributos.nome}</h3>
        <span>Peso: ${cartas[cartaMaquina].atributos.peso}</span> <Br>
        <span>Cilindrada: ${cartas[cartaMaquina].atributos.cilindrada}</span> <br>
        <span>Velocidade maxima: ${cartas[cartaMaquina].atributos.velocidadeMax} </span>`
    };
    jogadorGanhasTexto.innerHTML = ` ${jogadorGanhas}`;
    maquinaGanhasTexto.innerHTML = ` ${maquinaGanhas}`;
            
            
  }

 

}
function comecar(){
    cartaJogador = gerarNumero();
    cartaMaquina = gerarNumero();
    while(cartaJogador == cartaMaquina) cartaMaquina = gerarNumero();
    escreverAtributos();
    resultado.innerHTML = " ";
    cartaMaquinaTexto.innerHTML = " ";
    jogadorGanhasTexto.innerHTML = ` ${jogadorGanhas}`;
    maquinaGanhasTexto.innerHTML = ` ${maquinaGanhas}`;
    jogarBtn.disabled = false;
  
}

function escreverAtributos(){
    cartaJogadorTexto.innerHTML =  
    `<div class='cartaJogadorImg'>${cartas[cartaJogador].img}</div>
    <h3>${cartas[cartaJogador].atributos.nome}</h3>
    <input type="radio" id="peso" name="atributoJogador" value="peso" > 
    <label for ="peso">Peso: ${cartas[cartaJogador].atributos.peso}</label>  <br>
    <input type="radio" id="cilindrada" name="atributoJogador" value="cilindrada">
    <label for="cilindrada">Cilindrada: ${cartas[cartaJogador].atributos.cilindrada}</label> <br>
    <input type="radio" id="velocidadeMax" name="atributoJogador" value="velocidadeMax" >
    <label for="velocidadeMax">Velocidade Maxima: ${cartas[cartaJogador].atributos.velocidadeMax}</label> 

  `;


}

