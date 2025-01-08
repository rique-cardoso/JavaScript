const btnSortear = document.querySelector('#sortear')
const buscar = document.querySelector('#buscar')
const imgGet = document.querySelector('#imgGet')
const imgPost = document.querySelector('#imgPost')
// Requisição GET
btnSortear.addEventListener('click', e => {
    imgGet.innerHTML = '<p>Carregando...</p>' // indicador de carregamento
    // Faz a requisição para o backend Python
    fetch('http://127.0.0.1:5000/get-character', {
        method: 'GET',
    })
        .then(response => response.json())
        .then(data => {
          if(data.image){
            const img = document.createElement('img')
            img.src = data.image
            imgGet.innerHTML = '' // Limpa o indicador
            imgGet.appendChild(img)
          }else{
            imgGet.innerHTML = '<p>Erro ao carregar imagem. Tente novamente!</p>'
          }
        })
        .catch(() => {
            imgGet.innerHTML = '<p>Erro ao comunicar com o servidor. Tente novamente!</p>'
        })
})
// Requisição POST
buscar.addEventListener('blur', e => {
    id = buscar.value
    fetch('http://127.0.0.1:5000/post-character', { // URL do back-end
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }) // Envia os dados como JSON
    })
        .then(response => response.json())
        .then(data => {
            if(data.image){
                const img = document.createElement('img')
                img.src = data.image
                imgPost.innerHTML = '' // Lima o identificador
                imgPost.appendChild(img)
            }else{
                imgPost.innerHTML = '<p>Erro ao carregar imagem. Tente novamente!</p>'
            }
        })
        .catch(() => {
            imgPost.innerHTML = '<p>Erro ao comunicar com o servidor. Tente novamente!</p>'
        })
})