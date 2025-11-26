const numeros = [3, 4, 5, 8, 11];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 != 0) {
    soma += numeros[i];
  }
}

console.log(`Números ímpares: ${numeros.filter(n => n % 2 != 0)}`);
console.log(`Soma dos ímpares: ${soma}`);