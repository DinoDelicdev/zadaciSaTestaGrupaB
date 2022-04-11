let niz = [];
let apsolutnaSuma = 0;

for (i = 0; i < 10; i++) {
    niz[i] = Math.floor(-20 + Math.random() * 40);
}

console.log(niz);

for (i = 0; i < niz.length; i++) {
    if (niz[i] < 0) {
        niz[i] = niz[i] * (-1);
    }
    apsolutnaSuma += niz[i];
}

console.log(apsolutnaSuma);