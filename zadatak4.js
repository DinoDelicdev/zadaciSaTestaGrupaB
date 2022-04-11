let niz = [];
let maximalnaVrijednost = 0;

for (i = 0; i < 10; i++) {
    let proizvoljanBroj = Math.floor(10 + Math.random() * 90);
    niz[i] = proizvoljanBroj;
}

console.log(niz);

for (i = 0; i < niz.length; i++) {
    if (niz[i] > maximalnaVrijednost) {
        maximalnaVrijednost = niz[i];
    }
}

console.log(maximalnaVrijednost);

/*let maximalnaVrijednost = Math.max(...niz);

console.log(maximalnaVrijednost, niz.indexOf(maximalnaVrijednost));*/