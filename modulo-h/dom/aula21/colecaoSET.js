//A Coleção SET não permite entrada duplicada de elementos

let musicas = new Set(["Musica 1", "Musica boa", "Musica10"])

musicas.add("Musica muito legal")
musicas.add("Musica 1") //Ao tentar add um elemento que já existe, ele não adiciona

console.log(musicas)
musicas.forEach(element => console.log(element))
console.log("++++++++++++++++++++++++++++++")
for (const element of musicas) {
    console.log(element)
}

musicas.delete("Musica 1")