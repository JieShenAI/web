var a = ['1', 'b', function add(x) { return x + 1 }]
a[10] = "hello"
console.log(a.length, a);
console.log(Object.keys(a)); // [ '0', '1', '2', '10' ]
console.log(a[3])

// length属性的值就是等于最大的数字键加1，而这个数组没有整数键，所以length属性保持为0。
a['add'] = "add"
console.log(a.length, a);

// 使用delete命令删除一个数组成员，会形成空位，并且不会影响length属性。

var a = [1, 2, 3];
delete a[1];

a[1] // undefined
a.length // 3


/*
数组的某个位置是空位，与某个位置是undefined，是不一样的。
如果是空位，使用数组的forEach方法、for...in结构、
以及Object.keys方法进行遍历，空位都会被跳过。
*/
var a = [1, , 3,];
a['h'] = "hello"
a.forEach(function (x, i) {
    console.log(i + '. ' + x);
})