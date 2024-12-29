class Jogador {
    constructor(nome) {
        this.id = Symbol();
        this.nome = nome;
    }
}

let jogadores = [
    new Jogador('j1'),
    new Jogador('j2'),
    new Jogador('j3'),
    new Jogador('j4'),
    new Jogador('j2'),
    new Jogador('j3')
];

console.log("Jogadores iniciais:");
console.log(jogadores);
console.log("=======================");

let simbolos = [];
let simboloJogadores = jogadores.filter(j => j.nome === 'j2');

// Criar um array com os `id`s desses jogadores
simbolos = simboloJogadores.map(j => j.id);

console.log("Jogadores com nome 'j2':");
console.log(simboloJogadores);
console.log("Símbolos dos jogadores 'j2':", simbolos);

// Remover os jogadores com os `id`s correspondentes
for (let i = jogadores.length - 1; i >= 0; i--) {
    if (simbolos.includes(jogadores[i].id)) {
        jogadores.splice(i, 1); // Remove o jogador
    }
}

console.log("=======================");
console.log("Jogadores após a remoção:");
console.log(jogadores);