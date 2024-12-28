const btnCalcular = document.querySelector("#btnCalcular")
        btnCalcular.addEventListener('click', e => {
            const horaInicio = Number(document.querySelector('#horaInicio').value[0] + document.querySelector('#horaInicio').value[1])
            const minutoInicio = Number(document.querySelector('#horaInicio').value[3] + document.querySelector('#horaInicio').value[4])

            const horaFim = Number(document.querySelector('#horaFim').value[0] + document.querySelector('#horaFim').value[1])
            const minutoFim = Number(document.querySelector('#horaFim').value[3] + document.querySelector('#horaFim').value[4])

            let resultado = document.querySelector('#resultado')

            let minutoTotal = minutoFim - minutoInicio

            if(document.querySelector('#diaSeguinte').checked || horaFim <= horaInicio){
                let horaTotal = (24 - horaInicio) + horaFim
                resultado.innerHTML = `${horaTotal} horas e ${minutoTotal} minutos`
            }else{
                let horaTotal = horaFim - horaInicio
                resultado.innerHTML = `${horaTotal} horas e ${minutoTotal} minutos`
            }
        })