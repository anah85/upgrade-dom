const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const lista$$ = document.createElement("ul");

for(const redes of apps){
    const li$$ = document.createElement("li");
    li$$.innerText = redes;
    lista$$.appendChild(li$$);
}
document.body.appendChild(lista$$);