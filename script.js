const arr1 = [];
const divArray1 =[];
const divArrayOne = document.createElement('div');
const container  = document.querySelector(".container");

for(let i = 1;i <= 16;i++){

    arr1.push("div" + i);

}
    
arr1.map((item)=> {

    const div = document.createElement('div');
    div.textContent = item;
    div.classList.add("row1");
    divArray1.push(div);
});



divArray1.map((item) => divArrayOne.appendChild(item));
divArrayOne.classList.add("divArrayOne");
container.appendChild(divArrayOne);


const arr2= [];
const divArray2 =[];

for(let i = 1;i <= 16;i++){

    arr2.push("div" + i);

}
    
arr2.map((item)=> {

    const div = document.createElement('div');
    div.textContent = item;
    div.classList.add("row2");
    divArray2.push(div);
});


divArray2.map((item) => container.appendChild(item));

