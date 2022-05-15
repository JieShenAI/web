// name返回函数名
var f1 = function f2(x) { return x + 1 }
console.log(f1.name);

// 若是匿名函数，返回变量名
var f3 = function (x) {
    return x + 1
}
console.log(f3.name)


var v = 0

function setV() { 
    v += 1
    console.log(v);
}

for(var i=0;i<5;i++){
    setV()
}