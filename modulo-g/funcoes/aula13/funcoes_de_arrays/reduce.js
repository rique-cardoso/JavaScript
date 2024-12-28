/*
    ============================================================================================================================================
    reduce() -> quando é preciso encontrar um valor cumulativo ou concatenado com base no valor de um array.
    ============================================================================================================================================
*/

/* reduce() pode receber até 5 parâmetros: 
    1° - valor prévio ou valor anterior
    2° - valor atual
    3° - index (da esquerda para a direita)
    4° - array
    5° - valor prévio inicial
*/

const rockets = [
    {country: 'Rússia', launches: 32},
    {country: 'US', launches: 23},
    {country: 'China', launches: 16},
    {country: 'Europe', launches: 7},
    {country: 'India', launches: 4},
    {country: 'Japan', launches: 3}
]

const totalLaunches = rockets.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual.launches, 0) //Este 0 ao final indica qual será o valor prévio inicial, somando, desta forma: 0 (valor prévio incial indicado) + 32 (valor atual) = 32 (que vai passar, agora, a ser o valor prévio). 32 (valor prévio) + 23 (valor atual) = 55 (que vai passar, agora, a ser o valor atual); e assim por diante.

console.log(`Total Launches: ${totalLaunches}`)