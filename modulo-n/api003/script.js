const btnSorteio = document.querySelector('#sorteio')
const divImg = document.querySelector('#img')

btnSorteio.addEventListener('click', () => {
    divImg.innerHTML = '<p>Carregando...</p>' // Indicador de carregamento

    // Faz a requisição para o backend Python
    fetch('http://127.0.0.1:5000/get-character').then(response => response.json()).then(data => {
        if(data.image){
            const img = document.createElement('img')
            img.src = data.image
            divImg.innerHTML = '' // Limpa o indicador
            divImg.appendChild(img)
        } else{
            divImg.innerHTML = '<p>Erro ao carregar imagem. Tente novamente!</p>'
        }
    }).catch(() => {
        divImg.innerHTML = '<p>Erro ao comunicar com o servidor. Tente novamente!</p>'
    })
})