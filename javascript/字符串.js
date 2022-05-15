s = 'key = "value"'
console.log(s)

var longString = 'Long \
long \
long \
string';

console.log(longString)

var a = (function () { /*
line 1
line 2
line 3
*/}).toString().split('\n').slice(1, -1).join('\n')
console.log(a)

// 切片
var b = "hello world!"
console.log(b.slice(1,-1))
console.log(b[1]);
