console.log('MATCH')
console.log('-----')
const str1 = "JavaScript é divertido e JavaScript é poderoso!"
const matches = str1.match(/JavaScript/g)
console.log(matches)
console.log("=============================================")
console.log('MATCHALL')
console.log('--------')
const str2 = "JavaScript é JS. JS é JavaScript"
const regex = /JS/g
const matches1 = str2.matchAll(regex)
for (const match of matches1){
    console.log(match)
}
console.log("=============================================")
console.log('PADSTART, PADEND')
console.log('----------------')
const str3 = "73"
console.log(str3.padStart(5, "0"))
console.log(str3.padEnd(5, "*"))
console.log("=============================================")
console.log('REPEAT')
console.log('------')
const str4 = "Repete "
console.log(str4.repeat(7))
console.log("=============================================")
console.log("CODEPOINTAT, FROMCODEPOINT")
console.log('--------------------------')
const emoji = String.fromCodePoint(0x1F600);
const str5 = "AB"
console.log(emoji.codePointAt(0))
console.log(str5.codePointAt(1))
console.log(String.fromCodePoint(str5.codePointAt(1)))
console.log(emoji)