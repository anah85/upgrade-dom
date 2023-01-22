const newDiv3 = document.createElement("div");
document.body.appendChild(newDiv3);
for(let i=1; i<=6; i++){
const parrafo = document.createElement("p");
parrafo.innerHTML = i; 
newDiv3.appendChild(parrafo);
}

