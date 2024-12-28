const caractere = document.querySelector('#caractere')
        caractere.addEventListener('change', e => {
            if (caractere.value == caractere.value.toUpperCase()) {
                alert("É maiúscula")
            }else if( caractere.value == caractere.value.toLowerCase()){
                alert("É minúscula")
            }
        })