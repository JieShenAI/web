var toGoatLatin = function(sentence) {
    var yuan = 'aeiou'
    // console.log(sentence.toLowerCase());
    // sentence.toLowerCase
    arr = sentence.split(' ')
    for (let index = 0; index < arr.length; index++) {
        var element = arr[index]
        var head = element[0]
        // console.log(yuan.indexOf(head.toLowerCase()))
        if(yuan.indexOf(element[0].toLowerCase()) !== -1){
            arr[index] = element.slice(1)+element[0] + "ma" + 'a'.repeat(index+1)
        }else{
            arr[index] = element + "ma" + 'a'.repeat(index+1)
        }
    }
    return arr.join(' ')
};

sentence = "I speak Goat Latin error Error"
console.log(toGoatLatin(sentence)); 