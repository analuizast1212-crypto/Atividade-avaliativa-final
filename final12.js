const notas = [9, 8, 6, 10];

for (let i = 0; i < notas.length; i++) {
  let conceito;
  
  if (notas[i] >= 9) {
    conceito = "A";
  } else if (notas[i] >= 7) {
    conceito = "B";
  } else {
    conceito = "C";
  }
  
  console.log(`Nota ${notas[i]} = Conceito ${conceito}`);
}
