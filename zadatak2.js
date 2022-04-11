let broj = 12;
let faktori = [];

for(i = broj; i > 0; i--) {
    if (broj % i === 0) {
        faktori.push(i);
    }
}

console.log(faktori);