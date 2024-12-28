const btnVerificar = document.querySelector("#btnVerificar")
        const btnHoraAtual = document.querySelector("#btnHoraAtual")
        let resultado = document.querySelector("#resultado")
        btnVerificar.addEventListener('click', e => {
            let time = document.querySelector("#hora")
            let hora = Number(time.value[0] + time.value[1])
            let minutos = Number(time.value[3] + time.value[4])
            let segundos = Number(time.value[6] + time.value[7])
            let minutos_totais = (hora * 60) + minutos
            let segundos_totais = (minutos_totais * 60) + segundos
            resultado.innerHTML = segundos_totais.toLocaleString('pt-BR')
        })
        btnHoraAtual.addEventListener('click', e => {
            const agora = new Date();
            let minutos = agora.getMinutes()
            let minutos_totais = (agora.getHours() * 60) + agora.getMinutes()
            let segundos_totais = (minutos_totais * 60) + agora.getSeconds()
            resultado.innerHTML = segundos_totais.toLocaleString('pt-BR')
        })