// Métodos básicos de manipulação de String
const str = "JavaScript"
console.log("LENGTH, TOUPPERCASE, TOLOWERCASE")
console.log(str.length) // 10
console.log(str.toUpperCase()) // JAVASCRIPT
console.log(str.toLowerCase()) // javascript
console.log("=============================================")
console.log("TRIM")
const str1 = "   JavaScript    "
console.log(str1.trim()) // JavaScript
console.log("=============================================")
console.log("INCLUDES")
const str2 = "JavaScript é muito legal!"
console.log(str2.includes("JavaScript")) // true
console.log(str2.includes("javascript")) // false
console.log(str2.includes("Python")) // false
console.log("=============================================")
console.log("STARTSWITH, ENDSWITH")
console.log(str2.startsWith("Java")) // true
console.log(str2.startsWith("Python")) // false
console.log(str2.endsWith("legal!")) // true
console.log(str2.endsWith("legal")) // false
console.log(str2.endsWith("divertido")) // false