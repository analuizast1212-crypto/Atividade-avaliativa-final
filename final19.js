const valores = [10, 5, 8, 12];
let soma = 0;

for (let i = 0; i < valores.length; i++) {
  soma = valores[i];
}
const media = soma / valores.length;

const acimaMedia = valores.filter(valor => valor > media);

console.log(`Média: ${media}`);
console.log(`Valores acima da média: ${acimaMedia}`);
