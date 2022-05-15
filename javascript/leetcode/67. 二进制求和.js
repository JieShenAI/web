var addBinary = function (a, b) {
    a = a.split('').reverse()
    b = b.split('').reverse()
    var Min = Math.min(a.length, b.length)
    var Max = Math.max(a.length, b.length)
    large = b
    if (a.length > b.length) {
        large = a
    }
    // 待加的进位
    var jin = 0
    var ans = []
    for (let index = 0; index < Max; index++) {
        if (index < Min) {
            var t = add(a[index], b[index], jin)
        } else {
            var t = add(large[index], jin)
        }
        jin = t.jin
        ans.push(t.last)
    }
    if (jin > 0) {
        ans.push('1')
    }
    return ans.reverse().join('')
};
/**
 * 输入: a = "11", b = "1"
    输出: "100"
 */
function add() {
    var n = 0
    if (arguments.length === 3) {
        a = arguments[0]
        b = arguments[1]
        n = parseInt(a, 2) + parseInt(b, 2) + parseInt(arguments[2],2)
    } else {
        n = parseInt(arguments[0], 2) + arguments[1]
    }
    var jin = 0
    var last = n
    if (n > 1) {
        jin = 1
        last = n % 2
    }
    last = String(last)
    return { jin, last }
}
// console.log(add('1', 0));
a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
console.log(addBinary(a, b)); 