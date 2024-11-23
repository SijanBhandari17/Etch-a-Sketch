const container  = document.querySelector(".container");
let individualContainer;
const arr = [];
for(let i = 0;i < 16;i++){

    arr.push("div" + (i + 1));

}


const button10 = document.querySelector(".button10");
const button20 = document.querySelector(".button20");
const button30 = document.querySelector(".button30");




const divArray = [];
createGrid(16,16);

function createGrid(rows,columns){

    for(let i = 0;i <rows;i++){
        
        individualContainer = document.createElement('div');
        divArray[i] = [];
        
        
        for(let j = 0;j < columns;j++){
            
            const div = document.createElement('div');
            div.classList.add(`row${j}`);
            divArray[i][j] = div;

        }
        divArray[i].map((items)=> individualContainer.appendChild(items));
        individualContainer.classList.add("individualContainer");
        container.appendChild(individualContainer);
    }
    const items = document.querySelectorAll('[class^="row"]');
    
    items.forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.classList.add('hover-active');
        });
        
        
    });

}
    
    
button10.addEventListener("click",()=>{
    container.removeChild(individualContainer);
    container.innerHTML = '';
    createGrid(10,10)
    
})
button20.addEventListener("click",()=>{
    container.removeChild(individualContainer);
    container.innerHTML = '';
    createGrid(20,20);
})

button30.addEventListener("click",()=>{
    container.removeChild(individualContainer);
    container.innerHTML = '';
    createGrid(30,30);
})

