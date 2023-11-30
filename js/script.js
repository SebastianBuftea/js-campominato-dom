// mi creo la funzione generatrice di celle

function cellGenerator(number, valore){
    const element = document.createElement("div");
    element.classList.add("square");
    if(valore==3){
         element.style.width= "calc(100% / 10)";
         element.style.height= "calc(100% / 10)";
    }
    else if(valore==2){
        element.style.width= "calc(100% / 9)";
        element.style.height= "calc(100% / 9)";
    }
    else{
        element.style.width= "calc(100% / 7)";
        element.style.height= "calc(100% / 7)";
    }
   
    element.innerText= number;
    return element;
}

/* creeo la funzione che mi cambi il colore */
function cambioColore(x, y){
    x.addEventListener("click", function(){
        this.classList.toggle("clicked")
        console.log(y)
    })

}

// mi collego al elemento del dom in cui dovro iniettare il codice
const grid= document.getElementById("grid");

//mi collego al bottone che fara eseguire la creazione
const button= document.getElementById("genera")

//mi collego al livello di difficoltà selezionato



// inserisco l'evento al quale corrispondera la creazione della griglia
button.addEventListener("click", function(){

 //prendo in input il livello selezionato e in base a quello creo la griglia   
let difficultySelect=document.getElementById("difficultyLevel").value;


    if(difficultySelect==3){
        for(let i=1; i<=100; i++){
        let cell= cellGenerator(i, difficultySelect );
        grid.appendChild(cell); 
        
        //creo l evento in cui al click su una cella eusta cambi colore ed emetta un messaggio
        cambioColore(cell, i)
        }
    } 

   else if(difficultySelect==2){
    for(let i=1; i<=81; i++){
        let cell= cellGenerator(i, difficultySelect );
        grid.appendChild(cell); 
        
        //creo l evento in cui al click su una cella eusta cambi colore ed emetta un messaggio
        cambioColore(cell, i)
        }
    
   }

   else if(difficultySelect==1){
    for(let i=1; i<=49; i++){
        let cell= cellGenerator(i, difficultySelect );
        grid.appendChild(cell); 
        
        //creo l evento in cui al click su una cella eusta cambi colore ed emetta un messaggio
        cambioColore(cell, i);
        }
   }
   else{
    grid.innerHTML=" ";
   }


  
        
})

const buttondue= document.getElementById("reset");
buttondue.addEventListener("click", function(){
    grid.innerHTML=" ";
    document.getElementById("difficultyLevel").value="0"
  
})
   
