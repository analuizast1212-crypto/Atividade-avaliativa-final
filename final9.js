const produtos = [
    {produto: "lapis", valor: 2},
    {produto: "cadernos", valor: 80},
    {produto: "bolsinha", valor: 17},
];

const resultado = produtos.filter(u => u.valor < 20 );
console.log(resultado);
