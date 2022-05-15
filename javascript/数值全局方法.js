var a = parseInt("154")
console.log(a)
console.log(typeof a)

// 字符串转为整数的时候，是一个个字符依次转换，如果遇到不能转为数字的字符，
// 就不再进行下去，返回已经转好的部分。
var b = parseInt('15e2') // 15
var c = parseFloat('15e2') // 1500
console.log(b)
console.log(c)