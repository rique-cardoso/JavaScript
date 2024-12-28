// console.log(Date.now()) // retorna o timestamp (marca temporal)
/*
 * Resumo dos métodos da classe Date
 * >> getDate() = Dia do mês
 * >> getDay() = Dia da semana
 * >> getFullYear() = Ano com 4 dígitos
 * >> getHours() = Horas
 * >> getMilliseconds() = Milissegundos
 * >> getMinutes() = Minutos
 * >> getMonth() = Mês
 * >> getSeconds() = Segundos
 * >> getTime() = Timestamp (milisegundos desde 01/01/1970, 00:00:00 UTC)
 * >> Date.now() = Timestamp (milisegundos desde 01/01/1970, 00:00:00 UTC)
 * >> getTimezonedOffset() = Timezone da localidade
 * >> setDate() = Define um dia do mês para a data
 * >> setMonth() = Define um mês para a data
 * >> setFullYear() = Define um ano para a data
 * >> setHours() = Define uma hora para a data
 * >> setMinutes() = Define um minuto para a data
 * >> setSeconds() = Define um segundo para a data
 * >> setMilliseconds() = Define um milisegundo para a data
 * >> toDateString() = Retorna somente a data
 */
const data = new Date()
//Formatações da data
const dia = data.getDate() < 10 ? `0${data.getDate()}` : data.getDate()
const mes = data.getMonth() < 10 ? `0${data.getMonth()}` : data.getMonth()
//Em JS o mês é como se fosse um array, cujo o índice sempre inicia-se em 0, ou seja, janeiro é o mês zero, fevereiro o mês 1, março mês 2 e assim por diante.
const data_resumida = dia + "/" + mes + "/" + data.getFullYear()
console.log(data_resumida)