const olhos = [...document.querySelectorAll('.olho')]
//Variáveis para as posições x e y do mouse:
let x_axis = 0
let y_axis = 0
window.addEventListener('mousemove', e =>{
    x_axis = e.clientX
    y_axis = e.clientY
    const rotacao = Math.atan2(y_axis, x_axis) * 180 / Math.PI
    olhos.forEach(olho => {
        olho.style.transform = "rotate("+rotacao+"deg)"
    })
})
