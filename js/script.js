// mi creo la funzione generatrice di celle
function cellGenerator(number, row_numbercell){
    const element = document.createElement("div");
    element.classList.add("square");
    element.style.width= `calc(100% / ${row_numbercell} )`
    element.innerText= number;
    return element;
}

/* creeo la funzione che mi cambi il colore */
function cambioColore(x, y, arrayBomb){
    x.addEventListener("click", function(){
        if(arrayBomb.includes(y)){
             this.classList.toggle("bomb")
        }
        else{
            this.classList.toggle("no_bomb")
        }
       
    })
}

//creo il generatore di bombe
function bombGenerator( num_cell){

    let arrayBomb=[];
    let numrandom;

        for(let i=0; i<16; i++){ 
            let check =true;
            while(check){
                numrandom=(Math.floor(Math.random() *num_cell +1))
                if(!arrayBomb.includes(numrandom)){
                     check= false;
                }
            }
            arrayBomb.push(numrandom);         
        }
        return arrayBomb;
}


//creo la fuzione che  mi crei la griglia
function grillGenerator(){
    const grid= document.getElementById("grid");
    let difficultySelect= parseInt(document.getElementById("difficultyLevel").value)
    let cellNumber;
    let rowCell;
   
    grid.innerHTML=""
     if(difficultySelect==1){
        cellNumber=100
        }
     else if(difficultySelect==2){
        cellNumber=81
        }
    else{
        cellNumber=49
         }

    rowCell= Math.sqrt(cellNumber);
      
    for(let i=1; i<=cellNumber; i++){
        let cell= cellGenerator(i, rowCell );
        grid.appendChild(cell); 
  
        //creo l evento in cui al click su una cella questa cambi colore se selezionato
         cambioColore(cell, i, bombGenerator(cellNumber)  )
    } 
   
   
}





//mi collego al bottone che fara eseguire la creazione
const button= document.getElementById("genera")
// inserisco l'evento al quale corrispondera la creazione della griglia
button.addEventListener("click", function(){

grillGenerator()
})


