// mi creo la funzione generatrice di celle
function cellGenerator(number, row_numbercell){
    const element = document.createElement("div");
    element.classList.add("square");
    element.style.width= `calc(100% / ${row_numbercell} )`
    element.innerText= number;
    return element;
}


//creo il generatore di bombe
function bombGenerator(num_cell){

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

    let points=0;
    const bomb=bombGenerator(cellNumber)
    console.log(bomb)
    for(let i=1; i<=cellNumber; i++){
        let cell= cellGenerator(i, rowCell );
        grid.appendChild(cell); 
  
        gameOver=false; 
        //creo la costante bomb a cui affido l array contenente i numeri casuali 
      
        //creo l evento in cui al click su una cella questa cambi colore se selezionato
        cell.addEventListener("click", function(){
        
            //controllo se sono state trovate tutte le caselle senza bomba
           if(points ==cellNumber-16 ){ 
              document.getElementById("your_score").innerText=`partita finita hai vinto e totalizzato il massimo dei punti ${points} punti`;
           } 
           else{
                //controllo se è stata trovata una bomba
                if (gameOver== false){
                    if(bomb.includes(i)){
                        this.classList.toggle("bomb")
                        gameOver=true;
                    }
                    else{
                        this.classList.toggle("no_bomb") 
                        points=points+1;
                    } 
                } 
                document.getElementById("your_score").innerText=`Your score is ${points}`;
           }      
        }) 
        
    }   
}


//mi collego al bottone che fara eseguire la creazione
const button= document.getElementById("genera")
// inserisco l'evento al quale corrispondera la creazione della griglia
button.addEventListener("click", function(){

grillGenerator()
})


