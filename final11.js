const numeros = [4, 9, 2, 7];
const procurado = 7;
let posicao = 3;


for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === procurado) {
    posicao = i;
    break;
  }
}

if (posicao !== 3) {
  console.log(`O número ${procurado} está na posição ${posicao}`);
} 