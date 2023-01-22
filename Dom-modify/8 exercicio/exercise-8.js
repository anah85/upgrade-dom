const divS$$ = document.querySelectorAll('div')
const pEntreDiv$$ = document.createElement("p");
pEntreDiv$$.innerText = "Voy en medio!";
document.body.insertBefore(pEntreDiv$$, divS$$[1]);
