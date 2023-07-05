const PIEDRA = 1;
const PAPEL = 2;
const TIJERA = 3;

const EMPATE = 0;
const GANADOR = 1;
const PERDEDOR = 2;

const teclasPiedra = document.getElementById("piedra");
const teclasPapel = document.getElementById("papel");
const teclasTijera = document.getElementById("tijera");
const texto = document.getElementById("texto");

teclasPiedra.addEventListener("click", ()=>{
         
})
teclasPapel.addEventListener("click" , ()=>{

})
teclasTijera.addEventListener("click", ()=>{

})


function play(userOption){
    const machineOption = Math.floor (math.random () * 3)
    const result = Calcresult(userOption, machineOption);

    switch(result){
       case EMPATE:
             texto.innerHTML = "Empataron!";
             alert(machineOption + EMPATE);
       break;
       case GANADOR:
             texto.innerHTML = "Ganaste!";
             alert(machineOption + GANADOR);
       break;
       case PERDEDOR: 
             texto.innerHTML = "Perdiste!";
             alert(machineOption + PERDEDOR);
       break
}
}

function calcResult (userOption, machineOption) {
      if(userOption == machineOption){return EMPATE}

      else if(userOption == PIEDRA){
            if(machineOption == PAPEL) return PIERDE;
            if(machineOption == TIJERA) return GANADOR;
      }
      else if(userOption == PAPEL){
            if(machineOption == PIEDRA) return GANADOR;
            if(machineOption == TIJERA) return PIERDE;
      }
      else if(userOption == TIJERA){
            if(machineOption == PAPEL) return GANADOR;
            if(machineOption == PIEDRA) return PIERDE;
      }
}







