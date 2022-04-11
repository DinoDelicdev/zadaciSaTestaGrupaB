let prostiBrojevi = [];

for (i = 1; prostiBrojevi.length < 20; i++) {
    let broj = i;
    let faktoriBroja = [];
    for (j = broj; j > 0; j--) {
        if (broj % j === 0) {
            faktoriBroja.push(j);
        }
    }
    if (faktoriBroja.length <= 2) {
        prostiBrojevi.push(broj);
    }
}

console.log(prostiBrojevi);

/*let n = 100;
nextPrime:
for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            continue nextPrime;
        }
    }
    console.log(i);
}*/

