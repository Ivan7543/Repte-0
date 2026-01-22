const dicc1 = {p1: 1, p2: 2, p3: 100, p4: 12};


// Convertim a array de parells i ordenem segons el valor
const diccOrdenatArray = Object.entries(dicc1).sort((a, b) => a[1] - b[1]);


console.log(diccOrdenatArray);
/*
[
  ['1', 1],
  ['2', 2],
  ['4', 12],
  ['3', 100]
]
*/
