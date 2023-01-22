const div$$= document.querySelectorAll(".fn-insert-here");
for(i=0;i<div$$.length;i++){
const newP$$ =document.createElement("p");
newP$$.innerText = 'Voy dentro!';
div$$[i].appendChild(newP$$);
}
console.log(div$$);
