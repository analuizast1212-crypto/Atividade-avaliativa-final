const amigos = [
    {nome: "ana", idade: 18},
    {nome: "joao", idade: 16},
    {nome: "bruno", idade: 17},
];

const resultado = amigos.filter(u => u.idade >= 18);
console.log(resultado);
