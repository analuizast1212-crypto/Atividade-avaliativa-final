const frase = "a arara azul voa baixo";
let contador = 0;

for (let i = 0; i < frase.length; i++) {
  if (frase[i] === "a") {
    contador++;
  }
}

console.log(`Frase: "${frase}"`);
console.log(`Total de "a" encontrados: ${contador}`);
