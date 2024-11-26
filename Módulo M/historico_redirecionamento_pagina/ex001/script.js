const url = document.querySelector('#url')
const btn_url = document.querySelector('#btn_url')
btn_url.addEventListener('click', e => {
    // ALGUMAS POSSIBILIDADES DE MÉTODOS E PROPRIEDADES DE NAVEGAÇÃO ENTRE PÁGINAS:

    // window.location = 'https://www.youtube.com'
    // window.location.replace('https://www.youtube.com') -> Deleta a URL corrente do histórico
    // window.location.assign('https://www.youtube.com') -> Não deleta a URL corrente do histórico
    // window.location.reload() -> recarrega a página
    // window.history.back() -> página imediatamente anterior
    // window.history.go() -> página imediatamente posterior
    // window.history.length -> tamanho do histórico
    window.location = url.value

    //por estar dentro de um form na html, ele pode dar erro ao tentar redirecionar com o conteúdo do link (que está sendo puxado de um input que está dentro de uma form na html), para persistir em fazer isso, mesmo com o input dentro de form, pode-se usar o preventDefault, como está no index.html deste projeto.
})