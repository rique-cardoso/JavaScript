// Definição da URL da API que vou consumir
const btnSorteio = document.querySelector('#sorteio')
const divImg = document.querySelector('#img')
btnSorteio.addEventListener('click', e => {

    const id = Math.round(Math.random() * 20)
    const img = document.createElement('img')

    // Remove imagem se houver:
    divImg.innerHTML = ''

    // Espera a Promise da função buscarImagem ser resolvida
    buscarImagem(id).then(imageUrl => {
        img.src = imageUrl;  // Agora, usa a URL da imagem
        divImg.appendChild(img);
    });
})

// Buscando imagem do personagem
function buscarImagem(id) {
    const url = `https://rickandmortyapi.com/api/character/${id}`;

    return fetch(url)
        .then(response => response.json())
        .then(data => data.image)  // Retorna apenas a URL da imagem
        .catch(error => console.error('Erro:', error));

}


/* // Realizando a requisição GET
fetch(url)
    .then(response => {
        // Verificar se a requisição foi bem-sucedida
        if(!response.ok){
            throw new Error('Erro ao acessar a API')
        }
        return response.json(); // Parse da resposta JSON
    })
    .then(data => {
        console.log("Dados recebidos: ", data); // Exibe os dados no console
    })
    .catch(error => {
        console.error('Erro:', error) // Exibe erros, caso ocorram
    }) */