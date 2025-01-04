// Métodos Intermediários de manipulação de String
console.log('INDEXOF, LASTINDEXOF, SLICE, SUBSTRING, REPLACE, REPLACEALL')
console.log('-----------------------------------------------------------')
const str1 = 'JavaScript é legal, porque JavaScript é incrível!'
console.log(str1.indexOf("JavaScript")) // 0
console.log(str1.lastIndexOf("JavaScript")) // 27
console.log(str1.slice(0, 10)) // JavaScript
console.log(str1.slice(-9)) // incrível!
console.log(str1.substring(0, 10)) // JavaScript
console.log(str1.substring(11)) // é legal, porque JavaScript é incrível!
console.log(str1.replace("JavaScript", "Python")) // Python é legal, porque JavaScript é incrível!
console.log(str1.replaceAll("JavaScript", "Python")) // Python é legal, porque Python é incrível!
console.log("=============================================")
console.log('SPLIT')
console.log('-----')
const str2 = "Portugol, HTML, CSS, Java, JavaScript, Python"
console.log(str2.split(',')) // [ 'Portugol', ' HTML', ' CSS', ' Java', ' JavaScript', ' Python' ]