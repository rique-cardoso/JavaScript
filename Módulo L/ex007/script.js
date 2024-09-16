const alunos = []
const registrar = document.querySelector("#registrar")
const encerrar = document.querySelector("#encerrar")
const resultado = document.querySelector("#resultado")
function limparCampos(aluno, nota) {
    aluno.value = ""
    nota.value = ""
}
registrar.addEventListener('click', e => {
    const nome_aluno = document.querySelector("#aluno")
    const nota = document.querySelector("#nota")
    if(nome_aluno.value == "" || nota.value == ""){
        alert("Por favor, preencha todos os campos para registrar um aluno(a).")
    }else{
        const aluno = {
            nome_aluno: nome_aluno.value,
            nota: nota.value,
        }
        alunos.push(aluno)
        limparCampos(nome_aluno, nota)
    }
})
encerrar.addEventListener('click', e => {
    if(alunos.length > 0){
        const somaNotas = alunos.reduce((prev, now) => Number(prev) + Number(now.nota), 0)
        const mediaNotas = somaNotas / alunos.length
        const acimaMeida = alunos.filter(e => e.nota > mediaNotas).map(e => e.nome_aluno)
        resultado.innerHTML = `
            Média da turma: ${Number(mediaNotas).toFixed(2).replace(".", ",")}<br>
            Alunos acima da média:<br>${acimaMeida}`
    }else{
        alert("Não há ninguém cadastrado ainda, por favor, realize um cadastro para consultar as informações")
    }
})