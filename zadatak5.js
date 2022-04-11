let proizvoljanString = "hAcker speak";
let stringKaoNiz = [];

for (i = 0; i < proizvoljanString.length; i++) {
    stringKaoNiz.push(proizvoljanString[i]);
}

//console.log(stringKaoNiz);

for (i = 0; i < stringKaoNiz.length; i++) {
    if (stringKaoNiz[i].toLowerCase() === 'a') {
        stringKaoNiz[i] = '4';
    }
    if (stringKaoNiz[i].toLowerCase() === 'e') {
        stringKaoNiz[i] = '3';
    }
    if (stringKaoNiz[i].toLowerCase() === 'i') {
        stringKaoNiz[i] = '1';
    }
    if (stringKaoNiz[i].toLowerCase() === 'o') {
        stringKaoNiz[i] = '0';
    }
    if (stringKaoNiz[i].toLowerCase() === 's') {
        stringKaoNiz[i] = '5';
    }
}

proizvoljanString = stringKaoNiz.join('');

console.log(proizvoljanString);