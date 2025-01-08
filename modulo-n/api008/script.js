const searchBtn = document.querySelector('#searchBtn')
searchBtn.addEventListener('click', e => {
    const form = document.querySelector('#characterForm')
    e.preventDefault()
    const name = document.querySelector('#name').value.trim()
    const id = document.querySelector('#id').value
    /* if(!name && !id){
        alert('Preencha pelo menos um dos campos!')
        return
    }
    if(id && (id < 1 || id > 826)){
        alert('O ID deve estar entre 1 e 826!')
        return
    } */
   if (!name && (!id || isNaN(id) || id < 1 || id > 826)){
    alert('Preencha pelo menos o campo nome ou insira um ID válido (1-826).')
    return
   }
    fetch('http://127.0.0.1:5000/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, id}), // Envia os dados como JSON
    })
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.querySelector('#result')
            if(data.error){
                resultDiv.innerHTML = `<p>${data.error}</p>`
            }else{
                resultDiv.innerHTML = `
                    <p><strong>Nome:</strong> ${data.name}</p>
                    <img src="${data.image}" alt="${data.name}">
                `
            }
        })
        .catch(error => console.error('Erro:', error))
})